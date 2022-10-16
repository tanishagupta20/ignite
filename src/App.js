import './App.css';
import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidenav from './Sidenav.js'
import Countdown from './pages/Home/Countdown';
import Topnav from './pages/Home/Topnav';
import Register from './pages/Register/Register';
import Core from './pages/Core/Core';
import HomepageLogo from './pages/Home/HomepageLogo';
import IgniteAbout from './pages/Home/IgniteAbout';
import FlipPages from "./pages/Home/EventFlipBook/FlipPages";

function App() {
  const [aboutState, setAboutState] = useState()
  const [eventsState, setEventState] = useState()
  return (
    <div className='screen'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home aboutStateSetter = {setAboutState} eventStateSetter = {setEventState}/>} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/core" element={<Core />} />
        </Routes>
        <Sidenav aboutRef = {aboutState} eventsRef = {eventsState}/>
      </Router>
      
    </div>
  );
}

function Home(props){
  const [aboutState, setAboutState] = useState()
  const [eventsState, setEventState] = useState()

  useEffect(() => {
    props.aboutStateSetter(aboutState)
    props.eventStateSetter(eventsState)
  }, [aboutState, eventsState])

  return(
    <div style = {{width : "calc(100% - 40px)", backgroundColor : "transparent", height : "100vh"} }>
      <Topnav />
      <HomepageLogo />
      <Countdown />
      <IgniteAbout aboutStateSetter = {setAboutState}/>
      <FlipPages eventStateSetter = {setEventState} />
    </div>
  )
}

export default App;
