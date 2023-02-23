import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userBooking } from '../../../store/bookings'
import UserBookingDetails from './UserBookingDetails'

function UserBookings() {
    const dispatch = useDispatch()
    const today = new Date(Date.now())
    const bookings = Object.values(useSelector(state => state.bookings.user))
    const [ showPast, setShowPast ] = useState(false)
    const pastBookings = bookings.filter(booking => {
        if (new Date(booking.startDate) <= today) return booking
        else return null
    })
    const futureBookings = bookings.filter(booking => {
        if (new Date(booking.startDate) >= today) return booking
        else return null
    })

    useEffect(() => {
        dispatch(userBooking())
    }, [dispatch])
    if(!bookings) return null
    return (
        <div style={{"display":"flex", "flexDirection":"row"}}>
            <div style={{"margin":"40px", "padding":"0px 10px", "display":"flex", "flexDirection":"column", "border":"lightGray solid 1px", "borderRadius":"10px"}}>
                <div style={{"display":"flex", "justifyContent":"space-between", "alignItems":"center"}}>
                    <h2 style={{"borderBottom":"solid lightgray 1px", "padding":"10px"}}>Your Bookings:</h2>
                    <button style={{}} className='demo-user-button' onClick={() =>setShowPast(!showPast)}>Show past bookings</button>
                </div>
                {futureBookings.length ? (futureBookings.map((booking) => (
                    <UserBookingDetails key={booking.id} {...booking} />
                    // <div>booking {booking.id}</div>
                    ))
                ) : (
                    <h5>No Bookings.</h5>
                )}
            </div>
            {showPast && <div style={{"margin":"40px", "padding":"0px 10px", "display":"flex", "flexDirection":"column", "border":"lightGray solid 1px", "borderRadius":"10px"}}>
                <h2 style={{"borderBottom":"solid lightgray 1px", "padding":"10px"}}>Past Bookings:</h2>
                {pastBookings.length ? (pastBookings.map((booking) => (
                    <UserBookingDetails key={booking.id} {...booking} />
                    // <div>booking {booking.id}</div>
                    ))
                ) : (
                    <h5>No Bookings.</h5>
                )}
            </div>}
        </div>
    )
}

export default UserBookings
