# Virtual Book Library

A React-based web application that allows users to browse books, view detailed information, and manage their personal library collection.


## Features

-  Browse a curated collection of books
-  Search functionality by title, author, or genre
-  Detailed view for each book
-  Add/remove books to/from personal library
-  Responsive design for all devices

## Tech Stack

- React.js
- React Router for navigation
- Context API for state management
- React for icons
- CSS for styling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/S1r4i3/virtual-book-library.git
```

2. Navigate to the project directory:
```bash
cd virtual-book-library
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will open in your default browser at `http://localhost:5173`.

## Project Structure

```
virtual-book-library/
├── public/
├── src/
│   ├── components/
│   │   ├── BookCard.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   ├── contexts/
│   │   └── BookContext.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── BookDetails.jsx
│   │   └── MyLibrary.jsx
│   ├── styles/
│   │   └── styles.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Usage

1. **Browse Books**: On the home page, you can view all available books and use the search bar to filter them.

2. **View Book Details**: Click on "View Details" on any book card to see more information about the book.

3. **Manage Library**: 
   - Add books to your library by clicking "Add to Library" on any book card
   - View your library by clicking "My Library" in the navigation bar
   - Remove books from your library using the "Remove" button

## Available Scripts

Project Link: [https://github.com/S1r4i3/virtual-book-library]

