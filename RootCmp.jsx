import { AppHeader } from "./cmps/AppHeader.jsx";
import { BookDetails } from "./pages/BookDetails.jsx";
import { BookIndex } from "./pages/BookIndex.jsx";
import { Home } from "./pages/Home.jsx";

const Router = ReactRouterDOM.HashRouter;
const { Routes, Route } = ReactRouterDOM;

export function RootCmp() {
  return (
    <Router>
      <section className="app main-layout">
        <AppHeader />
        <main>
          <Routes>
            {/* TEMPORARY !!! TODO: change to Home */}
            <Route path="/" element={<BookIndex />} />
            <Route path="/book/:bookId" element={<BookDetails />} />
          </Routes>
        </main>
      </section>
    </Router>
  );
}
