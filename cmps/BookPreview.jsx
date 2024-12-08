// general template for this class
// https://i.imgur.com/9PVufL0.png

import LongTxt from "./LongTxt.jsx";

const { useNavigate } = ReactRouterDOM;
export default function BookPreview({ book }) {
  const navigate = useNavigate();
  return (
    <div className="book">
      <div
        className="book-image"
        onClick={() => {
          navigate("/book/" + book.id);
        }}
      >
        {book.listPrice.isOnSale && (
          <span className="sale-badge">ON SALE!</span>
        )}
        <img src={book.thumbnail} alt={book.title} />
      </div>
      <div className="book-info-container">
        <div className="book-title">{book.title}</div>

        <div className="wrapper-for-badge">
          {book.pageCount < 200 && (
            <span className="light-reading-badge">Light Reading</span>
          )}
          {book.pageCount >= 200 && book.pageCount <= 500 && (
            <span className="decent-reading-badge">Decent Reading</span>
          )}
          {book.pageCount > 500 && (
            <span className="serious-reading-badge">Serious Reading</span>
          )}
        </div>
        <div className="book-subtitle" style={{ marginBottom: "15px" }}>
          <LongTxt txt={book.subtitle} length={65} />
        </div>

        <div>
          <button
            className="edit-btn"
            onClick={() => {
              navigate("/book/edit/" + book.id);
            }}
          >
            Edit
          </button>
        </div>
        <div className="book-price">
          {book.listPrice.amount} {book.listPrice.currencyCode}
        </div>
      </div>
    </div>
  );
}
