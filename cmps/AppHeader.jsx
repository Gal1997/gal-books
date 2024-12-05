const { Link, NavLink } = ReactRouterDOM;

export function AppHeader() {
  return (
    <header className="app-header full main-layout">
      <section className="header-container">
        <h1>Gal's Online Library</h1>
        <nav className="app-nav">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Books</NavLink>
        </nav>
      </section>
    </header>
  );
}
