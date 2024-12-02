import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styling/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </button>
      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Acasa</Link>
        </li>
        <li className="navbar-item">
          <Link to="/AboutUs" className="navbar-link">Despre noi</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Proiecte" className="navbar-link">Proiecte</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Contact" className="navbar-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
