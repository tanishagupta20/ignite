import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidenav from './Sidenav.js'
import Countdown from './pages/Home/Countdown';
import Topnav from './pages/Home/Topnav';
import Register from './pages/Register/Register';
import Core from './pages/Core/Core';
import HomepageLogo from './pages/Home/HomepageLogo';
import IgniteAbout from './pages/Home/IgniteAbout';

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
      <Topnav />
      <HomepageLogo />
      <IgniteAbout />
      <Countdown />
    </div>
  )
}

export default App;
