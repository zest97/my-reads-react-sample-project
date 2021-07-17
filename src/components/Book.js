import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SwitchShelfSetting from './SwitchShelfSetting';

class Book extends Component {
    onUpdatingShelf = (shelf) => {
        this.props.onUpdateShelf(this.props.book, shelf);
    }
    render() {
        const { book } = this.props;
        const thumbnail = book.hasOwnProperty('imageLinks') ? book.imageLinks.thumbnail : 'https://books.google.com/books/content?printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api';
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail})` }}></div>
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