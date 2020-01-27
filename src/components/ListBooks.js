import React, { Component } from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyBooks</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">currently reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                      .filter(book => book.shelf === 'currentlyReading')
                      .map(book => (
                        <li key={book.id} >
                          <Book 
                            book={book}
                            moveShelf={this.props.moveShelf}
                          />
                        </li>
                      ))
                    }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">want to read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books
                    .filter(book => book.shelf === 'wantToRead')
                    .map(book => (
                      <li key={book.id} >
                        <Book 
                          book={book}
                          moveShelf={this.props.moveShelf}
                          
                        />
                      </li>
                    ))
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books
                    .filter(book => book.shelf === 'read')
                    .map(book => (
                      <li key={book.id} >
                        <Book 
                          book={book}
                          moveShelf={this.props.moveShelf}
                        />
                      </li>
                    ))
                  }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link 
            to="/search"
          ><button>Add a book</button></Link>
        </div>
    </div>
    )

  }
}

export default ListBooks