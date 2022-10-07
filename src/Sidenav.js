import React, { useState } from 'react'
import './Sidenav.css'
import EventsLogo from './assets/image/flags-svgrepo-com.svg'

function Sidenav() {
    const [sideNav, setSideNav] = useState(true)

    const showSidenav = () => setSideNav(!sideNav)

    return (
        <>
            <div className={sideNav ? 'nav-container' : 'nav-container active'}>
                <div className='burger-icon-container'>
                    <span className='burger' onClick={showSidenav}><i class="bi bi-list"></i></span>
                </div>

                <div className='main-menu-container'>
                    <div className='menu-items'>
                        <ul className='menu-list'>
                            <li>
                                <a href='#'>
                                    <div className='menu-icon'>
                                        <i class="bi bi-house"></i>
                                    </div>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <div className='menu-icon'>
                                        <i class="bi bi-info-square"></i>
                                    </div>
                                    <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'><div className='menu-icon'>
                                    <img height={15} src={EventsLogo} />
                                </div>
                                    <span>Events</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <div className='menu-icon'>
                                        <i class="bi bi-info-square"></i>
                                    </div>
                                    <span>Sponsors</span>
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