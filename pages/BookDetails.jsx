import { bookService } from "../services/book.service.js";
const { useParams, useNavigate } = ReactRouterDOM;
const { useEffect, useState } = React;

export function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    loadBook();
  }, [bookId]);

  function loadBook(id = bookId) {
    bookService
      .get(id)
      .then(setBook)
      .catch((err) => {
        console.log("Error with loading book", err);
      });
  }

  if (!book)
    return <div className="books-loading">Book Details Loading...</div>;
  console.log(book);

  return (
    <div className="book-details-container">
      <div className="thumbnail">
        {" "}
        <img src={book.thumbnail} alt={book.title} />
      </div>
      <div className="desc">{book.description}</div>
      <div>
        <h2 style={{ marginBottom: "20px" }}>Additonal Information:</h2>
        <div className="additional-info">
          <table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Price</th>
                <th>Published</th>
                <th>Pages</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{book.author}</td>
                <td>{book.listPrice.amount}</td>
                <td>{book.publishedDate}</td>
                <td>{book.pageCount}</td>
                <td>{book.language}</td>
              </tr>
            </tbody>
          </table>
          <div className="next-prev-btns">
            <button
              onClick={() => {
                navigate(`/book/${book.prevBookId}`);
              }}
            >
              {"<<"}
              <br /> Previous
            </button>
            <button
              onClick={() => {
                navigate(`/book/${book.nextBookId}`);
              }}
            >
              {">>"}
              <br /> Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
