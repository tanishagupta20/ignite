import React, { useState } from 'react'
import './Sidenav.css'
import { Link } from 'react-router-dom'

function Sidenav() {
    const [inactive, setInative] = useState(true)

    const toggleSideNav = () => setInative(!inactive)

    const toggleNav = () => setInative(true)

    return (
        <div className='sidenav-container'>
            <div></div>
            <div className={inactive ? 'nav-container' : 'nav-container active'}>
                <div className='burger-icon-container'>
                    <span className='burger' onClick={toggleSideNav}><i class="bi bi-list"></i></span>
                </div>

                <div className='faded-hz-line'></div>

                    <div className='main-menu-container'>
                        <div className='menu-items'>
                            <ul className='menu-list'>
                                <Link className="nav-items-link" onClick={toggleNav} to='/' title={inactive ? 'Home' : ''}>
                                    <li style={!inactive ? { width: "210px" } : { width: "20px" }} className="home-icon">
                                        <div className='menu-icon'>
                                            <i class="bi bi-house"></i>
                                        </div>
                                        <span className={!inactive ? 'menu-name' : 'hidden'}>Home</span>
                                    </li>
                                </Link>

                                <div className='faded-hz-line'></div>

                                <Link className="nav-items-link" onClick={toggleNav} to='/home' title={inactive ? 'Home' : ''}>
                                    <li style={!inactive ? { width: "210px" } : { width: "20px" }}>
                                        <div className='menu-icon'>
                                            <i class="bi bi-info-square"></i>
                                        </div>
                                        <span className={!inactive ? 'menu-name' : 'hidden'}>About</span>
                                    </li>
                                </Link>

                                <div className='faded-hz-line'></div>

                                <Link className="nav-items-link" onClick={toggleNav} to='/home' title={inactive ? 'Home' : ''}>
                                    <li style={!inactive ? { width: "210px" } : { width: "20px" }}>
                                        <div className='menu-icon'>
                                            <i class="bi bi-flag"></i>
                                        </div>
                                        <span className={!inactive ? 'menu-name' : 'hidden'}>Events</span>
                                    </li>
                                </Link>

                                <div className='faded-hz-line'></div>

                                <Link className="nav-items-link" onClick={toggleNav} to='/home' title={inactive ? 'Home' : ''}>
                                    <li style={!inactive ? { width: "210px" } : { width: "20px" }}>
                                        <div className='menu-icon'>
                                            <i class="bi bi-currency-rupee"></i>
                                        </div>
                                        <span className={!inactive ? 'menu-name' : 'hidden'}>Sponsors</span>
                                    </li>
                                </Link>

                                <div className='faded-hz-line'></div>

                                <Link className="nav-items-link" onClick={toggleNav} to='/core' title={inactive ? 'Core' : ''}>
                                    <li style={!inactive ? { width: "210px" } : { width: "20px" }}>
                                        <div className='menu-icon'>
                                            <i class="bi bi-people"></i>
                                        </div>
                                        <span className={!inactive ? 'menu-name' : 'hidden'}>Team</span>
                                    </li>
                                </Link>

                                <div className='faded-hz-line'></div>

                            </ul>

                            <ul className='menu-list'>
                                
                            <div className='faded-hz-line'></div>

                                <Link className="nav-items-link" onClick={toggleNav} to='/'>
                                    <li style={!inactive ? { width: "210px" } : { width: "20px" }} className="insta-icon">
                                        <div className='insta-icon'>
                                            <i class="bi bi-instagram"></i>
                                        </div>
                                        <span className={!inactive ? 'menu-name' : 'hidden'}>@ignite</span>
                                    </li>
                                </Link>

                                <div className='faded-hz-line'></div>

                                <Link className="nav-items-link" onClick={toggleNav} to='/'>
                                    <li style={!inactive ? { width: "210px" } : { width: "20px" }} className="linkedin-icon">
                                        <div className='linkedin-icon'>
                                        <i class="bi bi-linkedin"></i>
                                        </div>
                                        <span className={!inactive ? 'menu-name' : 'hidden'}>/ignite</span>
                                    </li>
                                </Link>

                                <div className='faded-hz-line'></div>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default Sidenav