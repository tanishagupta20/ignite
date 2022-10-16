import React from "react";
import './Card/CoreCard.css'
import CoreCard from "./Card/CoreCard";
import Marky from '../../assets/core/marky.jpg'
import paperImg from '../../assets/backgrounds/exclusive-paper.png'

export default function Core() {
  return (
    <div className="core-container" style={{backgroundImage : `url(${paperImg})`}}>
      <div className='code-main-heading'>
        <h1>CORE MEMBERS</h1>
      </div>
      <div className='faded-line'></div>
      <div className='core-div'>
        <CoreCard img={Marky} name="Hakam Singh" desig="Fest Coordinator" />
        <CoreCard img={Marky} name="Akarsh Tripathi" desig="Fest Head" />
        <CoreCard img={Marky} name="Satyam Negi" desig="Fest Head" />
        <CoreCard img={Marky} name="Tanisha Gupta" desig="idk" />
        <CoreCard img={Marky} name="Rashmika Datta" desig="idk" />
        <CoreCard img={Marky} name="FirstName LastName" desig="-designation-" />
        <CoreCard img={Marky} name="FirstName LastName" desig="-designation-" />
        <CoreCard img={Marky} name="FirstName LastName" desig="-designation-" />
      </div>
    </div>
  )
}