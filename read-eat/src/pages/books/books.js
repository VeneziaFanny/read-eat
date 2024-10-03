import React from 'react';

import Menu from '../../components/menu/menu';
import './books.css';

function Books() {
  const categories = ['BD', 'Romans', 'Autre', 'Tout'];

  return (
    <div className="books-page">
      <header className="books-header">
        <h1>Livres</h1>
        <Menu categories={categories} />
      </header>
      <main className="books-container">
        <p>Les reco arrivent bientôt !</p>
      </main>
    </div>
  );
}
  
export default Books;