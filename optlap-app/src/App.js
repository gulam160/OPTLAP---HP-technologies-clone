import './App.css';
import Navbar from './Components/navbar';
import Allroutes from './Components/Allroutes';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <Navbar />
      </nav>
      <main className="App-main">
        <Allroutes />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
