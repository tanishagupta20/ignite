import React from "react";
import './CoreCards.css'
import CoreCards from "./CoreCards";
import Marky from './assets/core/marky.jpg'

export default function Core(){
    return(
        <>
        <div className='code-main-heading'>
        <h1>CORE MEMBERS</h1>
      </div>
      <div className='faded-hz-line'></div>
      <div className='core-div'>
        <CoreCards img={Marky} name="Hakam Singh" desig="Fest Coordinator" />
        <CoreCards img={Marky} name="Akarsh Tripathi" desig="Fest Head" />
        <CoreCards img={Marky} name="Satyam Negi" desig="Fest Head" />
        <CoreCards img={Marky} name="Tanisha Gupta" desig="idk" />
        <CoreCards img={Marky} name="Rashmika Datta" desig="idk" />
        <CoreCards img={Marky} name="abcdef ghi" desig="blahblah blah" />
      </div>
        </>
    )
}