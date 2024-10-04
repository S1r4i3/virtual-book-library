import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import './BookCard.css'

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description:PropTypes.number.isRequired,
  }).isRequired,
  showAddButton: PropTypes.bool,
  onAddToLibrary: PropTypes.func,
  showRemoveButton: PropTypes.bool,
  onRemoveFromLibrary: PropTypes.func,
};


function BookCard({ book, showAddButton, onAddToLibrary, showRemoveButton, onRemoveFromLibrary }) {
  return (
    <center>
    <div className="book-card">
      <div className='book-card-content'>
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">by {book.author}</p>
      <p className="book-genre">Genre: {book.genre}</p>
      <p className="book-description">{book.description}</p>
      <p className="book-rating">Rating: {book.rating}/5</p>
      <div className="flex justify-between items-center">
        <Link to={`/book/${book.id}`} className="btn btn-link">
          View Details
        </Link>
        {showAddButton && (
          <button
          aria-label="Add book to library"
          onClick={() => onAddToLibrary(book)}
          className="btn btn-success"
        >
          Add to Library
        </button>
        
        )}
        {showRemoveButton && (
          <button
            onClick={() => onRemoveFromLibrary(book.id)}
            className="btn btn-danger"
          >
            Remove
          </button>
        )}
      </div>
      </div>
    </div>
    </center>
  );
}
export default React.memo(BookCard);
