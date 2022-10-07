import React, {useState} from 'react'
import './Sidenav.css'

function Sidenav() {
    const[sideNav, setSideNav] = useState(true)

    const showSidenav = () => setSideNav(!sideNav)

    return (
        <>
            <div className={sideNav ? 'nav-container' : 'nav-container active'}>
                <div className='burger-icon-container'>
                    <span className='burger' onClick={showSidenav}><i class="bi bi-list"></i></span>
                </div>

                <div className='main-menu-container'>

                </div>
            </div>
        </>
    )
}

export default Sidenav