const { useState, useRef, useEffect } = React;
const { useNavigate } = ReactRouterDOM;

import { debounce } from "../services/util.service.js";
import { bookService } from "../services/book.service.js";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js";

export function BookAddGoogleAPI() {
  const [googleApiSearch, setGoogleApiSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const onInputChangeApiCall = useRef(debounce(getBooksFromAPI)).current;
  const navigate = useNavigate();

  useEffect(() => {
    onInputChangeApiCall(googleApiSearch);
  }, [googleApiSearch]);

  function getBooksFromAPI(txt) {
    if (txt) {
      bookService
        .searchBooks(txt)
        .then((books) => {
          setSuggestions(books);
        })
        .catch((err) => {
          setSuggestions([]);
          console.log(err);
        });
    }
  }

  async function handleChange({ target }) {
    let inputText = target.value;
    setGoogleApiSearch(inputText);
    inputText = inputText.trim();

    // Filter suggestions based on input
    if (inputText) {
      setIsDropdownVisible(true);
    } else {
      setSuggestions([]);
      setIsDropdownVisible(false);
    }
  }

  function addBook(e, index) {
    e.preventDefault();
    const bookToSave = { ...suggestions[index], id: "" };
    bookService
      .save(bookToSave)
      .then(() => {
        showSuccessMsg(`Added book : ${bookToSave.title}`);
        setTimeout(() => {
          navigate(0); // Simulate a refresh after the delay
        }, 1500);
      })
      .catch((err) => {
        console.log("Error : ", err);
        showErrorMsg("Error , check console");
      });
  }

  return (
    <div>
      <form className="google-api-form">
        <input
          placeholder="Add book from Google API"
          autoComplete="off"
          value={googleApiSearch}
          onChange={handleChange}
          type="text"
          name="txt"
          id="txt"
          className="text-input"
          onFocus={() => setIsDropdownVisible(true)} // Show dropdown on focus
          onBlur={() => setTimeout(() => setIsDropdownVisible(false), 100)} // Delay to allow clicks
        />
        {isDropdownVisible && suggestions.length > 0 && (
          <ul className="google-api-form-dropdown">
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion.id}
                onMouseDown={(e) => e.preventDefault()} // Prevent input blur on click
              >
                <span>{suggestion.title}</span>
                <button onClick={(e) => addBook(e, index)}>Add book!</button>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}
