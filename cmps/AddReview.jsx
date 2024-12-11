const { useState } = React;

export function AddReview() {
  const [rating, setRating] = useState(0); // Holds the selected rating
  const [hover, setHover] = useState(0); // Tracks the hovered rating
  function handleChange({ target }) {}

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHover(value);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <section>
      <h2>Add Review</h2>
      <form className="addreview-form">
        <div className="label-input">
          <label htmlFor="fullname">Full Name:</label>
          <input
            // value={txt}
            onChange={handleChange}
            type="text"
            name="fullname"
            id="fullname"
            // className="text-input"
          />
        </div>
        <div className="label-input">
          <label for="rating">Rating:</label>
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
            // value={txt}
            onChange={handleChange}
            type="date"
            name="readat"
            id="readat"
            max={new Date().toISOString().split("T")[0]}
            // className="text-input"
          />
        </div>
      </form>
    </section>
  );
}
