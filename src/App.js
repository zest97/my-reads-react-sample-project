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
	updateBookShelf = (bookToUpdate, shelf) => {
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
					<MyBooks books={this.state.books} onUpdateShelf={this.updateBookShelf}/>
				)} />
				<Route path="/search" render={({ history }) => (
					<SearchBook onUpdateBookShelf={(bookToUpdate, shelf) => {
						this.updateBookShelf(bookToUpdate, shelf);
						history.push("/");
					}}/>
				)} />
			</div>
		)
	}
}

export default BooksApp
