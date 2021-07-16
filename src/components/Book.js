import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SwitchShelfSetting from './SwitchShelfSetting';

class Book extends Component {
    onUpdatingShelf = (shelf) => {
        this.props.onUpdateShelf(this.props.book, shelf);
    }
    render() {
        const { book } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <SwitchShelfSetting currentShelf={book.hasOwnProperty('shelf') ? book.shelf: 'none'} onUpdateShelf={this.onUpdatingShelf}/>
                    </div>
                </div>
                <div className="book-title">
                    {book.title}
                </div>
                <div className="book-authors">
                    {book.hasOwnProperty('authors') && book.authors.join(" ")}
                </div>
            </div>
        );
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
}

export default Book;