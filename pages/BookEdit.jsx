import { bookService } from "../services/book.service.js";

const { useState, useEffect } = React;
const { useNavigate, useParams } = ReactRouterDOM;

export function BookEdit() {
  const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook());
  const navigate = useNavigate();
  const { bookId } = useParams();

  useEffect(() => {
    if (bookId) loadBook();
  }, []);

  function loadBook() {
    bookService
      .get(bookId)
      .then(setBookToEdit)
      .catch((err) => {
        console.log("Problem getting book", err);
      });
  }

  function handleChange({ target }) {
    let { value, name: field } = target;

    switch (target.type) {
      case "range":
      case "number":
        value = +target.value;
        break;
      case "checkbox":
        value = target.checked;
        break;
      default:
        break;
    }

    if (field === "price" || field === "currencyCode" || field === "isOnSale") {
      if (field === "price") field = "amount"; // Stupid but necesarry

      setBookToEdit((prevBook) => ({
        ...prevBook,
        listPrice: {
          ...prevBook.listPrice,
          [field]: value,
        },
      }));
    } else {
      setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }));
    }
  }

  function onSaveBook(ev) {
    ev.preventDefault();
    bookService
      .save(bookToEdit)
      .then(() => navigate("/")) /*TODO: navigate to the right place */
      .catch((err) => {
        console.log("Cannot save!", err);
      });
  }

  const {
    author,
    description,
    language,
    listPrice,
    pageCount,
    publishedDate,
    subtitle,
    thumbnail,
    title,
  } = bookToEdit;
  return (
    <section className="book-edit">
      <h1>
        {bookId ? "Edit" : "Add"} Book {bookId ? title : ""}
      </h1>
      <form onSubmit={onSaveBook} className="form-editAdd">
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange}
          value={title || ""}
          name="title"
          id="title"
          required
        />
        <label htmlFor="author">Author</label>
        <input
          onChange={handleChange}
          value={author}
          type="text" // It's the default value , so in other <input>'s we will just not specify a type.
          name="author"
          id="author"
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          onChange={handleChange}
          value={description || ""} // Like here
          name="description"
          id="description"
          rows={bookId ? "10" : "2"}
          required
        ></textarea>

        <label htmlFor="language">Language</label>
        <input
          onChange={handleChange}
          value={language || ""}
          name="language"
          id="language"
          required
        />

        <label htmlFor="price">Price</label>
        <input
          onChange={handleChange}
          value={listPrice.amount || ""}
          type="number"
          name="price"
          id="price"
          step="0.01" // Restricts the number to two decimal places
          min="0"
          required
        />
        <label htmlFor="currencyCode">Currency Code</label>
        <input
          onChange={handleChange}
          value={listPrice.currencyCode || ""}
          name="currencyCode"
          id="currencyCode"
          required
          pattern="^(NIS|USD|EUR)$" // Only allows "NIS", "USD", or "EUR"
          title="Please enter one of the following: NIS, USD, EUR" // Tooltip for invalid input
        />

        <label htmlFor="pageCount">Page Count</label>
        <input
          onChange={handleChange}
          value={pageCount || ""}
          type="number"
          name="pageCount"
          id="pageCount"
          required
        />

        <label htmlFor="publishedDate">Published Year</label>
        <input
          onChange={handleChange}
          value={publishedDate || ""}
          type="number"
          name="publishedDate"
          id="publishedDate"
          required
        />

        <label htmlFor="subtitle">Subtitle</label>
        <input
          onChange={handleChange}
          value={subtitle || ""}
          name="subtitle"
          id="subtitle"
        />
        <label htmlFor="thumbnail">Thumbnail URL</label>
        <input
          onChange={handleChange}
          value={thumbnail || ""}
          type="url"
          name="thumbnail"
          id="thumbnail"
        />

        <div className="isOnSale">
          <label htmlFor="isOnSale">On Sale?</label>
          <input
            onChange={handleChange}
            checked={listPrice.isOnSale}
            type="checkbox"
            name="isOnSale"
            id="isOnSale"
          />
        </div>
        <button>Save</button>
      </form>
    </section>
  );
}
