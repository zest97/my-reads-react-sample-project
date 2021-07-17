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
	retrieveBooks = async () => {
		const books = await BooksAPI.getAll();
		this.setState(() => ({
			books: books
		}));
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
				<Route exact path="/">
					<MyBooks books={this.state.books} onUpdateShelf={this.updateBookShelf}/>
				</Route>
				<Route path="/search" render={({ history }) => (
					<SearchBook
						books={this.state.books}
						onUpdateBookShelf={(bookToUpdate, shelf) => {
							this.updateBookShelf(bookToUpdate, shelf);
							history.push("/");
					}}/>
				)} />
			</div>
		)
	}
}

export default BooksApp
