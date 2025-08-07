import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // import Link
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className={`nav ${isOpen ? 'open' : ''}`} id="navbar">
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/education" onClick={closeMenu}>Education</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}

export default Header;
