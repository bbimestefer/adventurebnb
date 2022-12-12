import React from 'react'
import { useSelector } from 'react-redux'
import SpotDetailCard from './SpotDetailCard'
import './index.css'



function Spots() {
    const spots = useSelector(state => state.spots.allSpots.Spots)
    if(!spots) return null
    return (
        <div className='main-wrapper'>
            <div className='card-wrapper'>
                {spots.map((spot) => (
                <SpotDetailCard key={spot.id} {...spot} />
                ))}
            </div>
        </div>
    )
}

export default Spots
