import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav-wrapper">
      <nav className="navstyle">
        <div>
          <Link to="/" className="">Virtual Library</Link>
        </div>
        <div>
          <Link to="/" className="mr-3">Home</Link>
          <Link to="/my-library">My Library</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
