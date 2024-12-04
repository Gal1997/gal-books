import { AppHeader } from "./cmps/AppHeader.jsx";
import { BookDetails } from "./pages/BookDetails.jsx";
import { BookIndex } from "./pages/BookIndex.jsx";
import { BookEdit } from "./pages/BookEdit.jsx";
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
            <Route path="/book/edit" element={<BookEdit />} />
            <Route path="/book/edit/:bookId" element={<BookEdit />} />
          </Routes>
        </main>
      </section>
    </Router>
  );
}
