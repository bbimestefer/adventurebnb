import React from "react";
import { NavLink } from "react-router-dom";
import './SpotDetailCard.css'
import image from '../images/sample-image.png'

function SpotDetailCard(spot) {
    if(!spot) return null
    return (
        <div className="spot-card">
            <NavLink to={`/api/spots/${spot.id}`}>
                <img className={'image'} src={image} alt="sample"></img>
                <p style={{'font-weight': 'bold', 'font-size': '14px'}}>{spot.city}, {spot.state}</p>
                <div style={{'font-size': '12px'}}>
                    <span style={{'font-weight': 'bold', 'font-size': '13px'}}>
                        ${spot.price} {" "}
                    </span>
                    night
                </div>
            </NavLink>
        </div>
    )
}

export default SpotDetailCard
