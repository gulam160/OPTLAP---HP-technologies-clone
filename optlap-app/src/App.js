import './App.css';
import Navbar from './Components/navbar';
import Allroutes from './Components/Allroutes';
import LargeWithLogoLeft from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <Navbar />
        <Allroutes />
      </nav>
      <main className="App-main"></main>
      <footer className="App-footer">
        <LargeWithLogoLeft />
      </footer>
    </div>
  );
}

export default App;
