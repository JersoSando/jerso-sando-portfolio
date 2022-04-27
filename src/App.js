import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
