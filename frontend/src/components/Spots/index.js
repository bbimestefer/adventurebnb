import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SpotDetailCard from './SpotDetailCard'
import './index.css'
import { clearReviews } from '../../store/reviews'



function Spots() {
    const dispatch = useDispatch()

    // this is so the reviews dont stay into the next spot you select
    useEffect(() => {
        dispatch(clearReviews())
    })

    const spotsObj = useSelector(state => state.spots.allSpots)

    const spots = Object.values(spotsObj)

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
