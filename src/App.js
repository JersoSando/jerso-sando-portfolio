import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/about'>About Me</Link>
      <Link to='/projects'>Projects</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </div>
  );
}

export default App;
