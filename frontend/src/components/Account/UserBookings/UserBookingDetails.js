import React from 'react'
import { useDispatch } from 'react-redux'
import { removeBooking } from '../../../store/bookings'

function UserBookingDetails(booking) {
    const dispatch = useDispatch()
    const startDate = new Date(booking.startDate).toUTCString().slice(0, 16)
    const endDate = new Date(booking.endDate).toUTCString().slice(0, 16)
    const deleteBooking = async () => {
        dispatch(removeBooking(booking.id))
        // if(check){
            // add modal here to make the check work to ask the user
            // if they are sure they want to delete that review
            // const deletedReview = await dispatch(removeReview(review.id))

            // if(deletedReview) alert(deletedReview.message)
        // }
    }
    return (
        <div style={{"display":"flex", "justifyContent":"space-between", "alignContent":"center", "gap":"40px", "borderBottom":"lightGray 1px solid"}}>
            <div>
                <h3 style={{"marginBottom":"0px", "color": "#ff5d5d"}}>{booking.Spot.name}</h3>
                <p style={{"marginTop":"0px"}}>{startDate} - {endDate}</p>
            </div>
            <div style={{"display":"flex", "alignItems":"center", "gap":"10px"}}>
                {/* <button onClick={editreview} >Edit</button> */}
                {/* <Link to={`/account/reviews/edit/${review.id}`}>Edit</Link> */}
                <button className='demo-user-button' onClick={deleteBooking}>Delete</button>
            </div>
        </div>
    )
}

export default UserBookingDetails
