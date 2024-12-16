import { bookService } from "../services/book.service.js";
import BookPreview from "../cmps/BookPreview.jsx";
import { BookFilter } from "../cmps/BookFilter.jsx";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js";
const { useState, useEffect } = React;

export function BookIndex() {
  const [books, setBooks] = useState([]);
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter());
  useEffect(() => {
    fetchBooks();
  }, [filterBy]);

  function fetchBooks() {
    bookService
      .query(filterBy)
      .then((books) => {
        setBooks(books);
        console.log("Books : ", books);
        showSuccessMsg("Books loaded successfully");
      })
      .catch((err) => {
        showErrorMsg("Problem loading books...");
      });
  }

  function onSetFilter(filterBy) {
    setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }));
  }

  if (!books || books.length == 0)
    return <div className="books-loading">Loading... </div>;
  else
    return (
      <div>
        <BookFilter defaultFilter={filterBy} onSetFilter={onSetFilter} />
        <div className="books-container">
          {books == "empty" && (
            <div className="filter-no-books">
              No books matches your filters.
            </div>
          )}
          {books != "empty" &&
            books.map((book) => <BookPreview key={book.id} book={book} />)}
        </div>
      </div>
    );
}
