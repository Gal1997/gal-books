const { useState, useEffect, useRef } = React;
import { bookService } from "../services/book.service.js";
import { debounce } from "../services/util.service.js";

export function BookFilter({ defaultFilter, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(defaultFilter);
  const mostExpensive = bookService.getMostExpensiveBook();
  const mostPages = bookService.getHighestPageCountBook();
  const newestBookYear = bookService.getNewestBookYear();

  const onSetFilterDebounce = useRef(debounce(onSetFilter)).current;

  useEffect(() => {
    onSetFilterDebounce(filterByToEdit);
  }, [filterByToEdit]);

  function handleChange({ target }) {
    let { value, name: field } = target;

    /* Note for self , All the inputs are received as strings!
    The switch ensures that the values that need to be converted to numbers (like price,date year,page count) are converted
    and also the checkbox converts the string to true/false
    the +target.value does the trick of convertic to numerical. */
    switch (target.type) {
      case "range":
        //   case "number":
        value = +target.value;
        break;
      case "checkbox":
        value = target.checked;
        break;
      case "txt":
        break;
    }
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }));
  }

  function onSubmitFilter(ev) {
    ev.preventDefault();
    onSetFilter(filterByToEdit);
  }

  const { txt, price, pageCount, publishedDate, isOnSale } = filterByToEdit;
  return (
    <section className="book-filter-container">
      <h2>Filter by</h2>
      <form className="book-filter-form">
        <div>
          <label htmlFor="txt">Text</label>
          <input
            value={txt}
            onChange={handleChange}
            type="text"
            name="txt"
            id="txt"
            className="text-input"
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            value={price}
            onChange={handleChange}
            type="range"
            min={1}
            max={mostExpensive}
            name="price"
            id="price"
          />
          <span>
            {price}
            {price ? "$" : ""}
          </span>
        </div>
        <div>
          <label htmlFor="pageCount">Page Count</label>
          <input
            value={pageCount}
            onChange={handleChange}
            type="range"
            min={1}
            max={mostPages}
            name="pageCount"
            id="pageCount"
          />
          <span>{pageCount}</span>
        </div>
        <div>
          <label htmlFor="publishedDate">Published Date</label>
          <input
            value={publishedDate}
            onChange={handleChange}
            type="range"
            min={1900}
            max={newestBookYear}
            name="publishedDate"
            id="publishedDate"
          />
          <span>{publishedDate}</span>{" "}
        </div>
        <div>
          <label htmlFor="isOnSale">Show only books on sale</label>
          <input
            checked={isOnSale}
            onChange={handleChange}
            type="checkbox"
            name="isOnSale"
            id="isOnSale"
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFilterByToEdit(bookService.getDefaultFilter());
          }}
        >
          Reset Filters
        </button>
      </form>
    </section>
  );
}
