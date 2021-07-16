import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import MyBooks from './pages/MyBooks'
import SearchBook from './pages/SearchBook'

class BooksApp extends React.Component {
	state = {
		books: []
	}
	componentDidMount() {
		this.retrieveBooks();
	}
	retrieveBooks = () => {
		BooksAPI.getAll().then((books) => {
			this.setState(() => ({
				books: books
			}));
		});
	}
	updateShelf = (bookToUpdate, shelf) => {
		BooksAPI.update(bookToUpdate, shelf).then(() => {
			bookToUpdate.shelf = shelf;
			this.setState((currentState) => ({
				books: currentState.books.filter((book) => (bookToUpdate.id !== book.id)).concat(bookToUpdate)
			}));
		})
	}
	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => (
					<MyBooks books={this.state.books} onUpdateShelf={this.updateShelf}/>
				)} />
				<Route path="/search" component={SearchBook} />
			</div>
		)
	}
}

export default BooksApp
