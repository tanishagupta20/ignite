import React from "react";
import './HomepageLogo.css'
import Ignite from '../../assets/logos/upscaled_ignite.png'

export default function HomepageLogo(){
    return(
        <div className="main-logo-container">
            <div className="logo-name-container">
                <div className="img-ignite">
                <img src = {Ignite} height = "150rem" width = "150rem"/>
                </div>
                <p className="ignite-name">IGNITE</p>
            </div>
        </div>
    )
}