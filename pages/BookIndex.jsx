import { bookService } from "../services/book.service.js";
import BookPreview from "../cmps/BookPreview.jsx";
import { BookFilter } from "../cmps/BookFilter.jsx";
const { useState, useEffect } = React;

export function BookIndex() {
  const [books, setBooks] = useState([]);
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter());
  useEffect(() => {
    fetchBooks();
    console.log(books);
  }, [filterBy]);

  function fetchBooks() {
    bookService
      .query(filterBy)
      .then((books) => {
        setBooks(books);
      })
      .catch((err) => console.log(err));
  }

  function onSetFilter(filterBy) {
    setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }));
  }

  if (!books || books.length == 0)
    return <div className="books-loading">Loading... </div>;

  return (
    <div>
      <BookFilter defaultFilter={filterBy} onSetFilter={onSetFilter} />
      <div className="books-container">
        {books == "empty" && (
          <div className="filter-no-books">No books matches your filters.</div>
        )}
        {books != "empty" &&
          books.map((book) => <BookPreview key={book.id} book={book} />)}
      </div>
    </div>
  );
}
