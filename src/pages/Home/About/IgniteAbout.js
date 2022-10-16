import React, { useEffect, useRef } from "react";
import './IgniteAbout.css';

export default function IgniteAbout(props) {
    const aboutRef = useRef()
    useEffect(() => {
        props.aboutStateSetter(aboutRef)
    }, [aboutRef])

    return (
        <>
            <div className="about-container" ref={aboutRef} id="about">
                <h1 className="about-title">ABOUT</h1>
                <p className="about-content">Ignite is a 2 day long tech-fest combining the most exciting events. This fest would act as more of a reality-check for students while focusing on the most important aspect of the IT industry : Upskilling. It is all about developing a competitive environment in the campus to enable students to explore their potential through various events. </p>
            </div>
        </>
    )
}