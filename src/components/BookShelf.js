import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookShelf(props) {
    const { label, books, onUpdateShelf} = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ label }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <Book key={book.id} book={book} onUpdateShelf={onUpdateShelf}/>
                    ))}<li>
                    </li>
                </ol>
            </div>
        </div>  
    );
}

BookShelf.propTypes = {
    label: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
}

export default BookShelf;