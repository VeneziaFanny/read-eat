import React from 'react';

import Menu from '../../components/menu/menu';
import './all-recipes.css';

function Recipes() {
  const categories = ['Sucré', 'Salé', 'Boisson', 'Tout'];

  return (
    <div className="recipes-page">
      <header className="recipes-header">
        <h1>Recettes</h1>
        <Menu categories={categories} />
      </header>
      <main className="recipes-container">
        <p>Les recettes arrivent bientôt !</p>
      </main>
    </div>
  );
  }
  
  export default Recipes;

// function Recipes() {
//   const recipes = [
//     { title: 'Recette 1', description: 'Description de la recette 1' },
//     { title: 'Recette 2', description: 'Description de la recette 2' },
//     // Ajoutez plus de recettes ici
//   ];

//   return (
//     <div className="recipes-page">
//       <header className="recipes-header">
//         <h1>Recettes</h1>
//       </header>
//       <main className="recipes-container">
//         {recipes.map((recipe, index) => (
//           <div key={index} className="recipe">
//             <h2>{recipe.title}</h2>
//             <p>{recipe.description}</p>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// }

// export default Recipes;