import React from 'react'
import { useDispatch } from 'react-redux'
import { removeBooking } from '../../../store/bookings'

function UserBookingDetails(booking) {
    const dispatch = useDispatch()
    const today = new Date(Date.now())
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
    if(booking.spotId === 12) {
        console.log("---------------", booking.spotId, "----------------------------")
        console.log("---------------", booking.startDate, "----------------------------")
        console.log('\n\n hours',today.getHours(), '\n hours are less than 16',today.getHours() < 16, '\n booking Start Date',new Date(booking.startDate).getDate() + 1,'\n todays date', today.getDate())
        console.log(new Date(booking.startDate).getDate() <= today.getDate())
        console.log(new Date(booking.startDate) > today)
        console.log(new Date(booking.startDate) > today || new Date(booking.startDate).getDate() === today.getDate())
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
                { (new Date(booking.startDate) > today || (new Date(booking.startDate).getDate() + 1 === today.getDate() && today.getHours() < 16)) && <button className='demo-user-button' onClick={deleteBooking}>Delete</button>}
            </div>
        </div>
    )
}

export default UserBookingDetails
