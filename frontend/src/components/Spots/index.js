import React from 'react'
import { useSelector } from 'react-redux'
import SpotDetailCard from './SpotDetailCard'

function Spots() {
    const spots = useSelector(state => state.spots)
    return (
        <div>
            <SpotDetailCard spots={spots}/>
        </div>
    )
}

export default Spots
