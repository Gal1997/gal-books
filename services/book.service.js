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
  //   getDefaultFilter,
};

// For Debug (easy access from console):
// window.cs = carService

function query(filterBy = {}) {
  return storageService.query(BOOK_KEY);
  // .then(books => {
  //     if (filterBy.txt) {
  //         const regExp = new RegExp(filterBy.txt, 'i')
  //         books = books.filter(car => regExp.test(car.vendor))
  //     }

  //     if (filterBy.minSpeed) {
  //         books = books.filter(car => car.maxSpeed >= filterBy.minSpeed)
  //     }

  //     return books
  // })
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

// function getDefaultFilter(filterBy = { txt: '', minSpeed: 0 }) {
//     return { txt: filterBy.txt, minSpeed: filterBy.minSpeed }
// }

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
