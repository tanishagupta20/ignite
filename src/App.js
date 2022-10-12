import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidenav from './Sidenav.js'
import Countdown from './pages/Home/Countdown';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className='screen'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Sidenav />
      </Router>
      
    </div>
  );
}

function Home(){
  return(
    <div style = {{width : "calc(100% - 300px)", backgroundColor : "transparent", height : "100vh"} }>
      <Countdown />
    </div>
  )
}

export default App;
