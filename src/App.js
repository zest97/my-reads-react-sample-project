import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import MyBooks from './pages/MyBooks'
import SearchBook from './pages/SearchBook'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={MyBooks} />
        <Route path="/search" component={SearchBook} />
      </div>
    )
  }
}

export default BooksApp
