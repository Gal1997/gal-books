export default function BookPreview({ book }) {
  return (
    <div className="book">
      <div className="book-image">
        {book.listPrice.isOnSale && (
          <span className="sale-badge">ON SALE!</span>
        )}
        <img src={book.thumbnail} alt={book.title} />
      </div>
      <div className="book-info-container">
        <div className="book-title">{book.title}</div>
        <div className="book-desc">{book.description}</div>
        <div className="book-price">
          {book.listPrice.amount} {book.listPrice.currencyCode}
        </div>
      </div>
    </div>
  );
}
