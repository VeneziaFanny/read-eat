import './App.css';
import Navbar from './components/navbar.js';
import Recipes from './pages/all-recipes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main-page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recettes" element={<Recipes />} />
        </Routes>
      </div>   
    </Router>
  );
}

function Home() {
  return (
    <header className="App-header">
      <p>
        Bienvenue sur Read Eat ! Le site qui te propose de la nourriture pour le corps et pour l'esprit !
      </p>
    </header>
  );
}

export default App;
