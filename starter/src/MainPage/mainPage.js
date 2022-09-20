import { Link } from 'react-router-dom'
import Shelf from "./Shelf/shelf"

function MainPage({ books, getBooks }) {
    return (
        <div className="main-page">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf books={books} getBooks={getBooks} shelfTitle={'Currently Reading'} shelf={'currentlyReading'} />
                        <Shelf books={books} getBooks={getBooks} shelfTitle={'Want to Read'} shelf={'wantToRead'} />
                        <Shelf books={books} getBooks={getBooks} shelfTitle={'Read'} shelf={'read'} />
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    Add a book
                </Link>
            </div>
        </div>

    );
}

export default MainPage;
