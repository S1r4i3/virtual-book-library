import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './contexts/BookContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookDetails from './pages/BookDetails';
import MyLibrary from './pages/MyLibrary';


function App() {
  return (
    <BookProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/my-library" element={<MyLibrary />} />
            </Routes>
          </main>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;