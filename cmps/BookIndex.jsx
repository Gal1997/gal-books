import { bookService } from "../services/book.service.js";
const { useState, useEffect } = React;

export function BookIndex() {
  const [book, setBooks] = useState([]);
  useEffect(() => {
    fetchBooks();
  }, []);

  function fetchBooks() {
    bookService
      .query()
      .then((books) => {
        setBooks(books);
        console.log(books);
      })
      .catch((err) => console.log(err));
  }

  if (!book || book.length == 0) return <div>Loading... </div>;
  return (
    <div className="books-container">
      {book.map((book) => (
        <div className="book">
          <div className="book-image">
            <img src={book.thumbnail}></img>
          </div>
          <div className="book-info-container">
            <div className="book-title">{book.title}</div>
            <div className="book-desc">{book.description}</div>
            <div className="book-price">
              {book.listPrice.amount} {book.listPrice.currencyCode}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
