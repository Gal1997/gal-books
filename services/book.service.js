import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";
import booksDemoData from "./book.demoData.js";

const BOOK_KEY = "bookDB";
let books = [];
books = _createBooks();

export const bookService = {
  query,
  get,
  remove,
  save,
  getNewestBookYear,
  getDefaultFilter,
  getMostExpensiveBook,
  getHighestPageCountBook,
  getEmptyBook,
  addReview,
  searchBooks,
};

// For Debug (easy access from console):
// window.cs = carService

function query(filterBy = {}) {
  const { txt, price, pageCount, publishedDate, isOnSale } = filterBy;
  return storageService.query(BOOK_KEY).then((books) => {
    const filteredBooks = books.filter((book) => {
      if (
        txt &&
        !`${book.title} ${book.subtitle}`
          .toLowerCase()
          .includes(txt.toLowerCase())
      ) {
        return false;
      }

      if (price && price > book.listPrice.amount) {
        return false;
      }

      if (pageCount && pageCount > book.pageCount) {
        return false;
      }

      if (publishedDate && publishedDate > book.publishedDate) {
        return false;
      }

      if (isOnSale && book.listPrice.isOnSale !== isOnSale) {
        return false;
      }
      // If all filters pass , object is filtered in
      return true;
    });
    if (filteredBooks.length == 0) return "empty";
    return filteredBooks;
  });
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId).then(_setNextPrevBookId);
}

function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId);
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book);
  } else {
    return storageService.post(BOOK_KEY, book);
  }
}

function addReview(review, bookId) {
  return get(bookId)
    .then((book) => {
      if (!book) {
        throw new Error("Book not found.");
      }
      const updatedBook = {
        ...book,
        reviews: [...(book.reviews || []), review],
        // Spread the last reviews and add a new one ,
        // or create an empty array so the new one will be inside an array and not a single object
      };
      return storageService.put(BOOK_KEY, updatedBook);
    })
    .catch((error) => {
      console.error("Failed to add review:", error);
    });
}

function getEmptyBook(
  author = "",
  description = "",
  language = "",
  listPrice = { amount: "", currencyCode: "", isOnSale: "" },
  pageCount = "",
  publishedDate = "",
  subtitle = "",
  thumbnail = "",
  title = ""
) {
  return {
    author,
    description,
    language,
    listPrice,
    pageCount,
    publishedDate,
    subtitle,
    thumbnail,
    title,
  };
}

function getDefaultFilter() {
  return {
    txt: "",
    price: false,
    pageCount: false,
    publishedDate: false,
    isOnSale: false,
  };
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_KEY);
  if (!books || !books.length) {
    let books = booksDemoData;
    utilService.saveToStorage(BOOK_KEY, books);
  }
  return books;
}

function getMostExpensiveBook() {
  return books.reduce((max, book) => {
    return book.listPrice.amount > max ? book.listPrice.amount : max;
  }, 0);
}

function getHighestPageCountBook() {
  return books.reduce((max, book) => {
    return book.pageCount > max ? book.pageCount : max;
  }, 0);
}

function getNewestBookYear() {
  return books.reduce((max, book) => {
    return book.publishedDate > max ? book.publishedDate : max;
  }, 0);
}

function _setNextPrevBookId(book) {
  return query().then((books) => {
    const bookIdx = books.findIndex((currBook) => currBook.id === book.id);
    const nextBook = books[bookIdx + 1] ? books[bookIdx + 1] : books[0];
    const prevBook = books[bookIdx - 1]
      ? books[bookIdx - 1]
      : books[books.length - 1];
    book.nextBookId = nextBook.id;
    book.prevBookId = prevBook.id;
    return book;
  });
}

// function _createCar(vendor, maxSpeed = 250) {
//     const car = getEmptyBook(vendor, maxSpeed)
//     car.id = utilService.makeId()
//     return car
// }

async function searchBooks(searchString) {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
    searchString
  )}&maxResults=5`;

  try {
    const response = await fetch(apiUrl); // Fetch data from Google Books API
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON response
    if (data.totalItems == 0) {
      return [];
    }
    // Extract relevant book information
    const books = data.items.map((item) => {
      return {
        id: item.id,
        author: (item.volumeInfo.authors || ["Unknown"])[0],
        description: item.volumeInfo.description || "",
        language: item.volumeInfo.language || "",
        listPrice: { amount: 9.99, currencyCode: "USD", isOnSale: false },
        pageCount: item.volumeInfo.pageCount || 100,
        publishedDate: item.volumeInfo.publishedDate || "2000",
        reviews: [],
        subtitle: item.volumeInfo.subtitle || "",
        thumbnail: (
          item.volumeInfo.imageLinks || {
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png",
          }
        ).thumbnail,

        title: item.volumeInfo.title || "",
      };
    });

    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}
