import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

const Menu = ({categories}) => {
  return (
    <nav className="menu">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/${category.toLowerCase()}`} className="menu-link">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;