import React from 'react';

import './menu.css';

const Menu = ({categories}) => {
  return (
    <nav className="menu">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`#${category.toLowerCase()}`}>{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;