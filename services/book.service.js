import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";
import booksDemoData from "./book.demoData.js";

const BOOK_KEY = "bookDB";
_createBooks();

export const bookService = {
  query,
  get,
  remove,
  save,
  //   getEmptyCar: getEmptyBook,
  getDefaultFilter,
};

// For Debug (easy access from console):
// window.cs = carService

function query(filterBy = {}) {
  const { txt, price, pageCount, publishedDate, isOnSale } = filterBy;
  return storageService.query(BOOK_KEY).then((books) => {
    const filteredBooks = books.filter((book) => {
      if (
        txt &&
        !`${book.title} ${book.description}`
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
  return storageService.get(BOOK_KEY, bookId);
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

// function getEmptyBook(vendor = '', maxSpeed = '') {
//     return { vendor, maxSpeed }
// }

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
  //   let books = utilService.loadFromStorage(BOOK_KEY);
  if (true /*!books || !books.length*/) {
    let books = booksDemoData;
    utilService.saveToStorage(BOOK_KEY, books);
  }
}

// function _createCar(vendor, maxSpeed = 250) {
//     const car = getEmptyBook(vendor, maxSpeed)
//     car.id = utilService.makeId()
//     return car
// }
