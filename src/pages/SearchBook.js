import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {search as SearchBookByLabel} from '../BooksAPI'
import Book from '../components/Book'
import PropTypes from 'prop-types'

class SearchBook extends Component {
    state = {
        searchBooks: []
    }
    handleInputChange = (e) => {
        const query = e.target.value;

        if (query === '') {
            this.setState(() => ({searchBooks: []}));
        } else {
            SearchBookByLabel(query, 5).then((books) => {
                if (books.hasOwnProperty('error')) {
                    this.setState(() => ({searchBooks: []}));
                } else {
                    this.setState(() => ({searchBooks: books}));
                }
            });
        }
    }
    render() {
        const { books, onUpdateBookShelf } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    placeholder="Search by title or author"/>

                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchBooks.length > 0 && this.state.searchBooks.map((book) => {
                            const BookInMyShelf = books.filter((bookItem) => (bookItem.id === book.id));
                            if (BookInMyShelf.length > 0) {
                                book.shelf = BookInMyShelf[0].shelf;
                            }
                            return (
                                <Book key={book.id} book={book} onUpdateShelf={onUpdateBookShelf}/>
                            );
                        })}
                    </ol>
                </div>
            </div>            
        );
    }
}

SearchBook.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
}

export default SearchBook;