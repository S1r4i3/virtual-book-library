import { useBookContext } from '../contexts/BookContext';
import BookCard from '../components/BookCard';
import './MyLibrary.css';

function MyLibrary() {
  const { myLibrary, removeFromLibrary } = useBookContext();

  return (
    <div className="mylibrary-container">
      <h1 className="mylibrary-title">My Library</h1>
      {myLibrary.length === 0 ? (
        <p className="empty-message">Your library is empty. Add some books!</p>
      ) : (
        <div className="book-grid">
          {myLibrary.map(book => (
            <BookCard
              key={book.id}
              book={book}
              showRemoveButton={true}
              onRemoveFromLibrary={removeFromLibrary}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyLibrary;
