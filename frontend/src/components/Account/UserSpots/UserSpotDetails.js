// import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getAllSpots, removeSpot } from "../../../store/spots"
import "./UserSpotDetails.css"

export default function UserSpotDetails (spot) {
    const dispatch = useDispatch()
    // const history = useHistory()
    // const [ check, setCheck ] = useState(true)

    // const editSpot = () => {
    //     history.push(`/account/spots/edit/${spot.id}`)
    // }

    const deleteSpot = async () => {
        // if(check){
            // add modal here to make the check work to ask the user
            // if they are sure they want to delete that spot
            const deletedSpot = await dispatch(removeSpot(spot.id))
            await dispatch(getAllSpots())

            if(deletedSpot) console.log('deleted')
        // }
    }

    if(!spot) return null
    return (
        <div style={{"display":"flex", "justifyContent":"space-between", "alignContent":"center", "gap":"40px", "borderBottom":"lightGray 1px solid"}}>
            <div>
                <h3 style={{"marginBottom":"0px"}}>{spot.name}</h3>
                <p style={{"marginTop":"0px"}}>{spot.city}, {spot.state}</p>
            </div>
            <div style={{"display":"flex", "alignItems":"center", "gap":"10px"}}>
                {/* <button onClick={editSpot} >Edit</button> */}
                <Link style={{"textDecoration":"underline"}} to={`/account/spots/edit/${spot.id}`}>Edit</Link>
                <button className="delete-spot-button" onClick={deleteSpot}>Delete</button>
            </div>
        </div>
    )
}
