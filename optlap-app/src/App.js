import './App.css';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <Navbar />
      </nav>
      <main className="App-main">
        Main Body to be used for Routes
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
