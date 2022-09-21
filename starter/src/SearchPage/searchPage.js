import { Link } from 'react-router-dom'
import * as BooksAPI from "../BooksAPI";
import { useState, useEffect } from "react";
import Book from "../Book/book";

function SearchPage({ allBooks, getBooks }) {
    const [books, setBooks] = useState([]);
    const [value, setValue] = useState("");

    // Handle change re-purposed from controlled components udacity exercise
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        let mounted = true;
        const searchBooks = async () => {

            if (value) {
                const res = await BooksAPI.search(value);
                res.length > 0 && res.forEach(searchedBook => {
                    allBooks.forEach(book => {
                        if (book.title === searchedBook.title) {
                            searchedBook.shelf = book.shelf;
                        }
                    });
                });
                if (mounted) {
                    setBooks(res);
                }
            }
            else {
                setBooks([]);
            }
        };

        searchBooks();
        return () => {
            mounted = false;
        };
    }, [value, allBooks]);

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Add a book
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {Array.isArray(books) && books.map((book) =>
                            <li key={book.id}>
                                <Book book={book} getBooks={getBooks} />
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        </div>

    );

}

export default SearchPage;