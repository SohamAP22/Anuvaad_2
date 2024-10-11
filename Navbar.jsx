import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaLanguage, FaPlayCircle, FaInfoCircle, FaEnvelope, FaBars } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Anuvaad
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              <FaHome className="nav-icon" />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/translate" className="nav-link" onClick={toggleMenu}>
              <FaLanguage className="nav-icon" />
              Translate
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/video-player" className="nav-link" onClick={toggleMenu}>
              <FaPlayCircle className="nav-icon" />
              Video Player
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              <FaInfoCircle className="nav-icon" />
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>
              <FaEnvelope className="nav-icon" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}