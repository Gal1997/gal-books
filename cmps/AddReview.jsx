const { useState } = React;
const { useParams, useNavigate } = ReactRouterDOM;
import { bookService } from "../services/book.service.js";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js";

export function AddReview() {
  const [rating, setRating] = useState(0); // Holds the selected rating
  const [hover, setHover] = useState(0); // Tracks the hovered rating
  const [review, setReview] = useState({});
  const { bookId } = useParams();
  const navigate = useNavigate();

  function handleChange({ target }) {
    let { value, name: field } = target;
    setReview((prevReview) => ({ ...prevReview, [field]: value }));
  }

  const handleClick = (value) => {
    setRating(value);
    setReview((prevReview) => ({ ...prevReview, ["rating"]: value }));
  };

  const handleMouseEnter = (value) => {
    setHover(value);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  function onSubmitReview(ev) {
    ev.preventDefault();
    bookService
      .addReview(review, bookId)
      .then(() => {
        showSuccessMsg("Review added successfuly!");
        setTimeout(() => {
          navigate(0); // Simulate a refresh after the delay
        }, 2000);
      })
      .catch((err) => {
        showErrorMsg("Unable to add review");
      });
  }

  return (
    <section>
      <h2>Add Review</h2>
      <form onSubmit={onSubmitReview} className="addreview-form">
        <div className="label-input">
          <label htmlFor="fullname">Full Name:</label>
          <input
            // value={txt}
            onChange={handleChange}
            type="text"
            name="fullname"
            id="fullname"
            required
          />
        </div>
        <div className="label-input">
          <label htmlFor="rating">Rating:</label>
          <div className="stars" id="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: value <= (hover || rating) ? "#ffc107" : "#FFFFFF",
                }}
                onClick={() => handleClick(value)}
                onMouseEnter={() => handleMouseEnter(value)}
                onMouseLeave={handleMouseLeave}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="label-input">
          <label htmlFor="readat">Read at:</label>
          <input
            // value={""}
            onChange={handleChange}
            type="date"
            name="readat"
            id="readat"
            max={new Date().toISOString().split("T")[0]}
            required
          />
        </div>
        <button className="review-btn">Submit</button>
      </form>
    </section>
  );
}
