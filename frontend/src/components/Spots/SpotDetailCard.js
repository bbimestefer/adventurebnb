import React from "react";
import { Link } from "react-router-dom";
import './SpotDetailCard.css'
import image from '../images/sample-image.png'

function SpotDetailCard(spot) {

    if(!spot) return null
    return (
        <div className="spot-card">
        <Link to={`/api/spots/${spot.id}`}>
            <img className={'image'} src={image} alt="sample"></img>
            <p style={{'fontWeight': 'bold', 'fontSize': '14px'}}>{spot.city}, {spot.state}</p>
            <div style={{'fontSize': '12px'}}>
                <span style={{'fontWeight': 'bold', 'fontSize': '13px'}}>
                    ${spot.price} {" "}
                </span>
                night
            </div>
        </Link>
        </div>
    )
}

export default SpotDetailCard