import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './../components/BookShelf'
import { Link } from 'react-router-dom'

class MyBooks extends Component {
    alphabetical(a, b) {
        const lowerA = a.title.toLowerCase();
        const lowerB = b.title.toLowerCase();

        if (lowerA < lowerB) {
            return -1;
        }

        if (lowerA > lowerB) {
            return 1;
        }

        return 0;
    }
    currentlyReading = (books) => {
        return books.filter((book) => (book.shelf === 'currentlyReading')).sort(this.alphabetical);
    }
    wantToRead = (books) => {
        return books.filter((book) => (book.shelf === 'wantToRead')).sort(this.alphabetical);
    }
    read = (books) => {
        return books.filter((book) => (book.shelf === 'read')).sort(this.alphabetical);
    }
    render() {
        const { books, onUpdateShelf } = this.props;
        const currentlyReading = this.currentlyReading(books);
        const wantToRead = this.wantToRead(books);
        const read = this.read(books);
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf label="Currently Reading" books={currentlyReading} onUpdateShelf={onUpdateShelf}/>
                    <BookShelf label="Want to Read" books={wantToRead} onUpdateShelf={onUpdateShelf}/>
                    <BookShelf label="Read" books={read} onUpdateShelf={onUpdateShelf}/>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    }
}

MyBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
}

export default MyBooks;