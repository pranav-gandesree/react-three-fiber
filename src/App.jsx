import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CubePage from './pages/Cube';
import SphereComponent from './pages/Sphere';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CubePage />} />
        <Route path='/sphere' element={<SphereComponent />} />
      </Routes>
    </Router>
  )
}

export default App
