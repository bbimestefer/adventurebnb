import React from 'react'
import { useSelector } from 'react-redux'
import SpotDetailCard from './SpotDetailCard'
import './index.css'



function Spots() {
    const spotsObj = useSelector(state => state.spots.allSpots)
    console.log('obj of', spotsObj)
    const spots = Object.values(spotsObj)
    console.log('spots', spots)
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
