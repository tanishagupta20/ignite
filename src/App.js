import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidenav from './Sidenav.js'
import Countdown from './pages/Home/Countdown';
import Register from './pages/Register/Register';
import Core from './pages/Core/Core';

function App() {
  return (
    <div className='screen'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/core" element={<Core />} />
        </Routes>
        <Sidenav />
      </Router>
      
    </div>
  );
}

function Home(){
  return(
    <div style = {{width : "100%", backgroundColor : "transparent", height : "100vh"} }>
      <Countdown />
    </div>
  )
}

export default App;
