import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userBooking } from '../../../store/bookings'
import UserBookingDetails from './UserBookingDetails'

function UserBookings() {
    const dispatch = useDispatch()
    const bookings = Object.values(useSelector(state => state.bookings.user))

    useEffect(() => {
        dispatch(userBooking())
    }, [])
    if(!bookings) return null
    return (
        <div style={{"margin":"40px", "padding":"0px 10px", "display":"flex", "flexDirection":"column", "border":"lightGray solid 1px", "borderRadius":"10px"}}>
            <h2 style={{"borderBottom":"solid lightgray 1px", "padding":"10px"}}>Your Bookings:</h2>
            {bookings.length ? (bookings.map((booking) => (
                <UserBookingDetails key={booking.id} {...booking} />
                // <div>booking {booking.id}</div>
                ))
            ) : (
                <h5>No Bookings.</h5>
            )}
        </div>
    )
}

export default UserBookings
