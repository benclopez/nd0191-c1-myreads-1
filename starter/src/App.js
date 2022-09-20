import "./App.css";
import { Route, Routes } from 'react-router-dom';
import MainPage from "./MainPage/mainPage";
import SearchPage from "./SearchPage/searchPage";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<MainPage books={books} getBooks={getBooks} />}
        />
        <Route path="/search" element={<SearchPage allBooks={books} getBooks={getBooks} />} />
      </Routes>
    </div>
  );
}

export default App;
