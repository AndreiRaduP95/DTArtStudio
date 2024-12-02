import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link" activeClassName="active">Acasa</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/AboutUs" className="navbar-link" activeClassName="active">Despre noi</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Proiecte" className="navbar-link" activeClassName="active">Proiecte</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Contact" className="navbar-link" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
