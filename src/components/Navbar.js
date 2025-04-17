import React from 'react';
import './Navbar.css';  // For styling the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>Ajay's Portfolio</h1>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
