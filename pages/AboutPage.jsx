export function AboutPage() {
  return (
    <section className="home">
      <h2 style={{ fontFamily: "monospace", fontSize: "30px" }}>
        Made by Gal Israeli for Coding Academy
      </h2>

      <h3 style={{ fontFamily: "monospace", fontSize: "18px" }}>
        A simple book showcase website that uses local storage for CRUD
        operations
        <br /> There's 15 dummy books for the user to explore <br />
        You can create/edit/delete and even pull books from Google Books API
        into this website.
        <br />
      </h3>

      <h2>
        <a
          href="https://github.com/Gal1997/"
          style={{ fontFamily: "monospace", fontSize: "16px" }}
        >
          https://github.com/Gal1997/
        </a>
      </h2>
    </section>
  );
}
