import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'

import './Main.css'

const Main = () =>
  <div className='Main'>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
    </Routes>
  </div>

export default Main