import React from "react";
import './CoreCard.css'

export default function CoreCard(props) {
    return (
        <>
            <div className="core-card-body">
                <img src={props.img} className="core-card-img" />
                <h3 className="core-card-name">{props.name}</h3>
                <p className="core-card-desig">{props.desig}</p>
            </div>
        </>
    )
}