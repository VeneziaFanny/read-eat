import './App.css';
import Navbar from './components/navbar.js';

function App() {
  return (
    <div className="main-page">
      <Navbar />
      <header className="App-header">
        <p>
          Bienvenue sur mon site! 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
