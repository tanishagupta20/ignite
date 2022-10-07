import React, { useState } from 'react'
import MenuItems from './MenuItems';
import './Sidenav.css'
import {eventsLogo} from './assets/image/flags-svgrepo-com.svg'

function Sidenav() {

    const [inactive, setInactive] = useState(true)
    return (
        <>
            {/* M A I N    N A V    C O N T A I N E R */}
            <div className={inactive ? 'side-nav inactive' : 'side-nav'}>

                {/* B U R G E R     I C O N */}
                <div onClick={() => setInactive(!inactive)} className='burger-icon' >
                    <i style={inactive ? { transform: "rotate(360deg)", justifyContent: "flex-start" } : { transform: "rotate(0deg)" }} className="bi bi-list animate-burger"></i>
                </div>

                {/* A D D I N G    M E N U S */}
                <MenuItems menuName="Home" menuIcon={<i class="bi bi-house"></i>} />
                <MenuItems menuName="About" menuIcon={<i class="bi bi-info-lg"></i>} />
                <MenuItems menuName="Events" menuIcon = {eventsLogo} />
                <MenuItems menuName="Sponsors" menuIcon={<i class="bi bi-info-lg"></i>} />



            </div>
        </>
    )
}

export default Sidenav;