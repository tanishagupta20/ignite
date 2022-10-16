import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidenav from './Sidenav/Sidenav.js'
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Core from './pages/Core/Core';


function App() {
  const [aboutState, setAboutState] = useState()
  const [eventsState, setEventState] = useState()
  return (
    <div className='screen'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home aboutStateSetter={setAboutState} eventStateSetter={setEventState} />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/core" element={<Core />} />
        </Routes>
        <Sidenav aboutRef={aboutState} eventsRef={eventsState} />
      </Router>

    </div>
  );
}

export default App;
