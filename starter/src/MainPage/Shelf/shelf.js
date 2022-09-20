import Book from "../../Book/book";

function Shelf({ books, getBooks, shelfTitle, shelf }) {
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter((book) => book.shelf === shelf).map((book) =>
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

export default Shelf;
