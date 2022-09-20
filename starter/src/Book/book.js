import * as BooksAPI from "../BooksAPI";

function Book({ book, getBooks }) {

    const onUpdateShelf = async (event) => {
        await BooksAPI.update(book, event.target.value);
        await getBooks();
    };

    return (
        <div className="main-page">
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <div className="book">
                            <div className="book-top">
                                <div
                                    className="book-cover"
                                    style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage:
                                            `url(${book?.imageLinks?.thumbnail})`,
                                    }}
                                ></div>
                                <div className="book-shelf-changer">
                                    <select onChange={onUpdateShelf} defaultValue={book?.shelf ? book?.shelf : 'none'}>
                                        <option disabled>
                                            Move to...
                                        </option>
                                        <option value="currentlyReading">
                                            Currently Reading
                                        </option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book?.title}</div>
                            <div className="book-authors">{book?.authors?.map(author => author + ' ')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Book;
