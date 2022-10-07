import React from 'react'
import './Sidenav.css'

export default function MenuItems(props) {
    return (
        <div className='main-menu'>
            <ul className='menu-items-list'>
                <li>
                    <a className='menu-item'>
                        <div className='menu-icon'>
                            {props.menuIcon}
                        </div>
                        {props.menuName}</a>
                </li>
            </ul>
        </div>
    )
}