import { useParams, useNavigate } from 'react-router-dom';
import { useBookContext } from '../contexts/BookContext';
import './BookDetails.css';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, addToLibrary } = useBookContext();
  
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
      <h1 className="book-title">{book.title}</h1>
      <div className="book-info-card">
        <p className="book-meta">by <strong>{book.author}</strong></p>
        <p className="book-meta">Genre: <strong>{book.genre}</strong></p>
        <p className="book-meta">Rating: <strong>{book.rating}/5</strong></p>
        <p className="book-meta">Published: <strong>{book.publication_year}</strong></p>
        <p className="book-description">{book.description}</p>
        <button
          onClick={() => addToLibrary(book)}
          className="add-library-btn"
        >
          Add to My Library
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
