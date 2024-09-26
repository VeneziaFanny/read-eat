import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="main-body">
      <div className="navbar-title">
        <p>READ EAT</p>
        <p>Books & Foods</p>
      </div>
      <div className="navbar-menu">
        <a href="#recettes">Recettes</a>
        <a href="#livres">Livres</a>
        <a href="#quisuisje">Qui suis-je ?</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;