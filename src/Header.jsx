import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

function Header() {
  const favorites = useSelector((state) => state.favorites.favorites);
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand/logo */}
        <h1 className="navbar-brand">
          <Link to="/" className="brand-link">Flick Flare</Link>
        </h1>

        {/* Navigation links */}
        <ul className="nav-links">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/">Movies</Link></li>
          <li><Link className="nav-link" to="/login">Login</Link></li>
          <li><Link className="nav-link" to="/register">Register</Link></li>
          <li><Link className="nav-link" to="/Favorites">  <i className="bi bi-star-fill text-warning"></i>  {favorites.length}</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
