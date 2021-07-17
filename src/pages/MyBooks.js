import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './../components/BookShelf'
import { Link } from 'react-router-dom'
import { SHELVES} from './../config/shelves'

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
    filterByShelf = (books, shelf) => {
        return books.filter((book) => (book.shelf === shelf.id)).sort(this.alphabetical);
    }
    render() {
        const { books, onUpdateShelf } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {SHELVES.map((shelf) => (
                        <BookShelf
                            label={shelf.title}
                            key={shelf.id + shelf.title}
                            books={this.filterByShelf(books, shelf)}
                            onUpdateShelf={onUpdateShelf}/>
                    ))}
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