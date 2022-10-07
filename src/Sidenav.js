import React, { useState } from 'react'
import './Sidenav.css'
import EventsLogo from './assets/image/flags-svgrepo-com.svg'

function Sidenav() {
    const [inactive, setInative] = useState(true)

    const toggleSideNav = () => setInative(!inactive)

    return (
        <>
            <div className={inactive ? 'nav-container' : 'nav-container active'}>
                <div className='burger-icon-container'>
                    <span className='burger' onClick={toggleSideNav}><i class="bi bi-list"></i></span>
                </div>

                <div className='main-menu-container' onClick={toggleSideNav}>
                    <div className='menu-items'>
                        <ul className='menu-list'>
                            <li style={!inactive ? {width : "210px"} : {width : "20px"}} className = "home-icon">
                                <a href='#' title={inactive ? 'Home' : ''}>
                                    <div className='menu-icon imported-i'>
                                        <i class="bi bi-house"></i>
                                    </div>
                                    <span className={!inactive ? 'menu-name' : 'hidden'}>Home</span>
                                </a>
                            </li>
                            <li style={!inactive ? {width : "210px"} : {width : "20px"}}>
                                <a href='#' title={inactive ? 'About' : ''}>
                                    <div className='menu-icon imported-i'>
                                        <i class="bi bi-info-square"></i>
                                    </div>
                                    <span className={!inactive ? 'menu-name' : 'hidden'}>About</span>
                                </a>
                            </li>
                            <li style={!inactive ? {width : "210px"} : {width : "20px"}}>
                                <a href='#' title={inactive ? 'Events' : ''}>
                                    <div className='menu-icon'>
                                        <img height={14.5} src={EventsLogo} />
                                    </div>
                                    <span className={!inactive ? 'menu-name' : 'hidden'}>Events</span>
                                </a>
                            </li>
                            <li style={!inactive ? {width : "210px"} : {width : "20px"}}>
                                <a href='#' title={inactive ? 'Sponsors' : ''}>
                                    <div className='menu-icon imported-i'>
                                        <i class="bi bi-info-square"></i>
                                    </div>
                                    <span className={!inactive ? 'menu-name' : 'hidden'}>Sponsors</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidenav