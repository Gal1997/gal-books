const { useState } = React;

const LongTxt = ({ txt, length = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {isExpanded ? txt : txt.slice(0, length)}
      {txt.length > length && (
        <span>
          {isExpanded ? "" : "..."}
          <span
            className="load-more-btn"
            onClick={toggleText}
            style={{ marginLeft: "5px", cursor: "pointer" }}
          >
            {isExpanded ? "<<<" : "Read More"}
          </span>
        </span>
      )}
    </div>
  );
};

export default LongTxt;
