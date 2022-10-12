import React, { useState } from 'react'
import './Sidenav.css'
import EventsLogo from './assets/image/flags-svgrepo-com.svg'
import { Link } from 'react-router-dom'

function Sidenav() {
    const [inactive, setInative] = useState(true)

    const toggleSideNav = () => setInative(!inactive)

    return (
        <div className='sidenav-container'>
            <div></div>
            <div className={inactive ? 'nav-container' : 'nav-container active'}>
                <div className='burger-icon-container'>
                    <span className='burger' onClick={toggleSideNav}><i class="bi bi-list"></i></span>
                </div>

                <div className='main-menu-container' onClick={toggleSideNav}>
                    <div className='menu-items'>
                        <ul className='menu-list'>
                            <Link className = "nav-items-link" to='/home' title={inactive ? 'Home' : ''}>
                                <li style={!inactive ? { width: "210px" } : { width: "20px" }} className="home-icon">
                                    <div className='menu-icon imported-i'>
                                        <i class="bi bi-house"></i>
                                    </div>
                                    <span className={!inactive ? 'menu-name' : 'hidden'}>Home</span>
                                </li>
                            </Link>
                            <Link className = "nav-items-link" to='/home' title={inactive ? 'Home' : ''}>
                                <li style={!inactive ? { width: "210px" } : { width: "20px" }}>
                                    <div className='menu-icon imported-i'>
                                        <i class="bi bi-info-square"></i>
                                    </div>
                                    <span className={!inactive ? 'menu-name' : 'hidden'}>About</span>
                                </li>
                            </Link>
                            <Link className = "nav-items-link" to='/home' title={inactive ? 'Home' : ''}>
                                <li style={!inactive ? { width: "210px" } : { width: "20px" }}>
                                    <div className='menu-icon'>
                                        <img height={14.5} src={EventsLogo} />
                                    </div>
                                    <span className={!inactive ? 'menu-name' : 'hidden'}>Events</span>
                                </li>
                            </Link>
                            <Link className = "nav-items-link" to='/home' title={inactive ? 'Home' : ''}>
                                <li style={!inactive ? { width: "210px" } : { width: "20px" }}>
                                    <div className='menu-icon imported-i'>
                                        <i class="bi bi-info-square"></i>
                                    </div>
                                    <span className={!inactive ? 'menu-name' : 'hidden'}>Sponsors</span>
                                </li>
                            </Link>
                            <Link className = "nav-items-link" to='/core' title={inactive ? 'Core' : ''}>
                                <li style={!inactive ? { width: "210px" } : { width: "20px" }}>
                                    <div className='menu-icon imported-i'>
                                        <i class="bi bi-info-square"></i>
                                    </div>
                                    <span className={!inactive ? 'menu-name' : 'hidden'}>Core</span>
                                </li>
                            </Link>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidenav