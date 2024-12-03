// general template for this class
// https://i.imgur.com/9PVufL0.png

const { useNavigate } = ReactRouterDOM;
export default function BookPreview({ book }) {
  const navigate = useNavigate();
  return (
    <div
      className="book"
      onClick={() => {
        navigate("/book-details/" + book.id);
      }}
    >
      <div className="book-image">
        {book.listPrice.isOnSale && (
          <span className="sale-badge">ON SALE!</span>
        )}
        {/* 
        {book.pageCount < 100 && (
          <span className="light-reading-badge">Light Reading</span>
        )}
        {book.pageCount > 200 && book.pageCount <= 500 && (
          <span className="descent-reading-badge"></span>
        )}
        {book.pageCount > 500 && (
          <span className="serious-reading-badge"></span>
        )} */}
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
          {book.subtitle}
        </div>
        <div className="book-price">
          {book.listPrice.amount} {book.listPrice.currencyCode}
        </div>
      </div>
    </div>
  );
}
