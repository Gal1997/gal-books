import { AppHeader } from "./cmps/AppHeader.jsx";
import { BookIndex } from "./pages/BookIndex.jsx";
import { Home } from "./pages/Home.jsx";

export function RootCmp() {
  return (
    <section className="app main-layout">
      <AppHeader />
      <main>
        {/* <Home /> */}
        <BookIndex />
      </main>
    </section>
  );
}
