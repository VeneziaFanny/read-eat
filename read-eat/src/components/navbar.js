import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <nav className="main-body">
      <div className="navbar-title">
        <Link to="/">READ EAT</Link>
        <p>Books & Foods</p>
      </div>
      <div className="navbar-menu">
        <Link to="/recettes" className="nav-link">Recettes</Link>
        <a href="#livres" className="nav-link">Livres</a>
        <a href="#quisuisje" className="nav-link">Qui suis-je ?</a>
        <a href="#contact" target="_blank" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;