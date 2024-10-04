// pages/HomePage.js
import { useBookContext } from '../contexts/BookContext';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import { useState } from "react";
import './HomePage.css';

function HomePage() {
  const { books, addToLibrary } = useBookContext();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage-container">
      <center>
        <h1 className="homepage-title">Virtual Book Library</h1>
      </center>
      <SearchBar onSearch={setSearchTerm} />
      <div className="book-grid">
        {filteredBooks.map(book => (
          <BookCard
            key={book.id}
            book={book}
            showAddButton={true}
            onAddToLibrary={addToLibrary}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
