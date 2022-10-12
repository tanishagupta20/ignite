import './App.css';
import React from 'react'
import Sidenav from './Sidenav.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Core from './Core';

function App() {
  return (
    // <div className='screen'>
    //   <Router>
    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route exact path="/core" element={<Core />} />
    //     </Routes>
    //     <Sidenav />
    //   </Router>
    // </div>

    <div>
      <Core />
    </div>
  );
}

function Home() {
  return (
    <div style={{ width: "calc(100% - 300px)", backgroundColor: "transparent", height: "100vh" }}></div>
  )
}

export default App;
