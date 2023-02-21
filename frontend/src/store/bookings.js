import { csrfFetch } from "./csrf";
import { getAllSpots, getSpotById } from "./spots"

const CREATE = 'bookings/CREATE'
const USER = 'bookings/USER'
const SPOT = 'bookings/SPOT'
const UPDATE = 'bookings/UPDATE'
const DELETE = 'bookings/DELETE'

const createBooking = (booking) => {
    return {
        type: CREATE,
        booking
    }
}

const loadUserBooking = (bookings) => {
    return {
        type: USER,
        bookings
    }
}

const loadSpotBooking = (bookings) => {
    return {
        type: SPOT,
        bookings
    }
}

const updateBooking = (booking) => {
    return {
        type: UPDATE,
        booking
    }
}

const deleteBooking = (bookingId) => {
    return {
        type: DELETE,
        bookingId
    }
}

export const bookingCreate = (spotId, booking) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(booking)
      })
      if(response.ok){
        const booking = await response.json()
        dispatch(createBooking(booking))
      }
}

export const userBooking = () => async dispatch => {
    const response = await csrfFetch(`/api/bookings/current`)

    if(response.ok){
        const bookings = await response.json()
        dispatch(loadUserBooking(bookings))
        return bookings
    }
}

export const spotBooking = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`)

    if(response.ok){
        const bookings = await response.json()
        dispatch(loadSpotBooking(bookings))
    }
}

export const bookingUpdate = (booking) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${booking.id}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(booking)
      })

    if(response.ok){
        const booking = await response.json()
        dispatch(updateBooking(booking))
        return booking
    }
}

export const removeBooking = (bookingId) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"}
      })

    if(response.ok) {
        const booking = await response.json()
        dispatch(deleteBooking(bookingId))
        return booking
    }
}

const initialState = { spot: {}, user: {} }

const bookingReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case CREATE:
            newState = {...state, spot: {...state.spot}}
            newState.spot[action.booking.id] = action.booking
            return newState
            // return {...state, spot: {...state.spot, [action.booking.id]: action.booking}}
        case USER:
            newState = {...state, user: {...state.user}}
            action.bookings.Bookings.forEach(booking => {
                newState.user[booking.id] = booking
            });
            return newState
        case SPOT:
            newState = {...state, spot: {}}
            action.bookings.Bookings.forEach(booking => {
                newState.spot[booking.id] = booking
            });
            return newState
        case UPDATE:
            return {...state, spot: {...state.spot, [action.booking.id]: action.booking}}
        case DELETE:
            newState = {spot: {...state.spot}, user: {...state.user}}
            if(newState.spot[action.bookingId]) delete newState.spot[action.bookingId]
            if(newState.user[action.bookingId]) delete newState.user[action.bookingId]
            return newState
        default:
            return state
    }
}

export default bookingReducer
