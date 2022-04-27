import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import Projects from './Projects';
import About from './About';

export default function Header() {
  return (
    <div>
        <div className='links'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About Me</Link>
      <Link to='/projects'>Projects</Link>
      </div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </div>
  )
}
