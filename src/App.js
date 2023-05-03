import pizza from './pizza.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pizza} className="App-logo" alt="logo" />
        <p>
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Judy's Pizza Parlor
        </a>
      </header>
    </div>
  );
}

export default App;
