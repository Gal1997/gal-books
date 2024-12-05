import { AppHeader } from "./cmps/AppHeader.jsx";
import { BookDetails } from "./pages/BookDetails.jsx";
import { BookIndex } from "./pages/BookIndex.jsx";
import { BookEdit } from "./pages/BookEdit.jsx";
import { Home } from "./pages/Home.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { NotFound } from "./pages/NotFound.jsx";

const Router = ReactRouterDOM.HashRouter;
const { Routes, Route } = ReactRouterDOM;

export function RootCmp() {
  return (
    <Router>
      <section className="app main-layout">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<BookIndex />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/book" element={<BookIndex />} />
            <Route path="/book/:bookId" element={<BookDetails />} />
            <Route path="/book/edit" element={<BookEdit />} />
            <Route path="/book/edit/:bookId" element={<BookEdit />} />
            <Route path="/book/add" element={<BookEdit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </section>
    </Router>
  );
}
