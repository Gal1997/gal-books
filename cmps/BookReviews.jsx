import { bookService } from "../services/book.service.js";

export function BookReviews({ book }) {
  return (
    <div>
      <h2>Reviews:</h2>
      <div className="reviews-container">
        {book.reviews.map((review, idx) => (
          <div key={idx + new Date().getMilliseconds()}>
            <div className="name">
              {review.fullname.charAt(0).toUpperCase() +
                review.fullname.slice(1).toLowerCase()}
            </div>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  style={{
                    fontSize: "24px",
                    color: value <= review.rating ? "#ffc107" : "#FFFFFF",
                  }}
                  key={value}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="readat">{review.readat}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
