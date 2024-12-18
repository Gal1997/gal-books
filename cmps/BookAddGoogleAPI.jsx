const { useState } = React;
export function BookAddGoogleAPI() {
  const [googleApiSearch, setGoogleApiSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const sampleSuggestions = [
    "React",
    "A Game Of Thrones",
    "React Native The Sorcercer and The Beautiful Garden",
    "React Hooks",
    "Redux",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Vue.js",
  ];

  function handleChange({ target }) {
    let inputText = target.value;
    setGoogleApiSearch(inputText);
    inputText = inputText.trim();

    // Filter suggestions based on input
    if (inputText) {
      const filteredSuggestions = sampleSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputText.toLowerCase())
      );

      console.log(filteredSuggestions);

      setSuggestions(filteredSuggestions);
      setIsDropdownVisible(true);
    } else {
      //   setSuggestions([]);
      setIsDropdownVisible(false);
    }
  }

  function handleSuggestionClick(suggestion) {
    setSearchTerm(suggestion);
    setIsDropdownVisible(false); // Hide dropdown
  }

  return (
    <div>
      <form className="google-api-form">
        <input
          placeholder="Search books from GoogleAPI"
          value={googleApiSearch}
          onChange={handleChange}
          type="text"
          name="txt"
          id="txt"
          className="text-input"
          onFocus={() => setIsDropdownVisible(true)} // Show dropdown on focus
          onBlur={() => setIsDropdownVisible(false)}
        />
        {isDropdownVisible && suggestions.length > 0 && (
          <ul className="google-api-form-dropdown">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                // onMouseDown={(e) => e.preventDefault()} // Prevent input blur on click
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}
