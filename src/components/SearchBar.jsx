import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import './SearchBar.css'; 

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query, onSearch]);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by title, author, or genre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <FaSearch className="search-icon" aria-label="Search icon" />
    </div>
  );
}

export default SearchBar;
