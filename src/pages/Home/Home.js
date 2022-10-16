import React, { useState, useEffect } from 'react';
import Topnav from './TopNav/Topnav';
import HomepageLogo from './IgniteLogo/HomepageLogo';
import Countdown from './Countdown/Countdown';
import IgniteAbout from './About/IgniteAbout';
import FlipPages from "./EventFlipBook/FlipPages";


function Home(props) {
    const [aboutState, setAboutState] = useState()
    const [eventsState, setEventState] = useState()

    useEffect(() => {
        props.aboutStateSetter(aboutState)
        props.eventStateSetter(eventsState)
    }, [aboutState, eventsState])

    return (
        <div style={{ width: "calc(100% - 40px)", backgroundColor: "transparent", height: "100vh" }}>
            <Topnav />
            <HomepageLogo />
            <Countdown />
            <IgniteAbout aboutStateSetter={setAboutState} />
            <FlipPages eventStateSetter={setEventState} />
        </div>
    )
}

export default Home;