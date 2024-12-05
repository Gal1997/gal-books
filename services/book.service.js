import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";
import booksDemoData from "./book.demoData.js";

const BOOK_KEY = "bookDB";
const books = _createBooks();

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
