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
          navigate("/book-details/" + book.id);
        }}
      >
        {book.listPrice.isOnSale && (
          <span className="sale-badge">ON SALE!</span>
        )}
        <img src={book.thumbnail} alt={book.title} />
      </div>
      <div className="book-info-container">
        <div className="book-title">{book.title}</div>

        {book.pageCount < 100 && (
          <span className="light-reading-badge">Light Reading</span>
        )}
        {book.pageCount > 200 && book.pageCount <= 500 && (
          <span className="descent-reading-badge">Descent Reading</span>
        )}
        {book.pageCount > 500 && (
          <span className="serious-reading-badge">Serious Reading</span>
        )}
        <div className="book-subtitle" style={{ marginBottom: "15px" }}>
          <LongTxt txt={book.subtitle} length={65} />
        </div>
        <div className="book-price">
          {book.listPrice.amount} {book.listPrice.currencyCode}
        </div>
      </div>
    </div>
  );
}
