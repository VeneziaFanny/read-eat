import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import logo from '../../photos/logo-without-background.png';

const Navbar = () => {
  return (
    <nav className="main-body">
      <div className="navbar-title">
        <Link to="/">READ EAT</Link>
        <p>Books & Foods</p>
      </div>
      <div className="navbar-logo">
        <img src={logo} alt="logo" /> 
      </div>
      <div className="navbar-menu">
        <Link to="/recettes" className="nav-link">Recettes</Link>
        <Link to="/books" className="nav-link">Livres</Link>
        <Link to="/whoami" className="nav-link">Je me présente</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;