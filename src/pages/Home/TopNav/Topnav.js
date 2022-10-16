import React from "react";
import './Topnav.css';
import CU from '../../../assets/logos/CU.png';
import { Link } from "react-router-dom";

export default function Topnav() {
    return (
        <div className="top-nav-container">
            <div className="chitkara-logo-div">
                <img src={CU} className="chitkara-logo" height="48rem" />
            </div>
            <div className="register-hp">
                <Link className="register-link" to="/register">
                    <button className='registerButton'>Register</button>
                </Link>
            </div>
        </div>
    )
}