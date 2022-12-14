import { csrfFetch } from "./csrf";

const CREATE = 'reviews/CREATE'
const USER = 'reviews/USER'
const SPOT = 'reviews/SPOT'
const UPDATE = 'reviews/UPDATE'
const DELETE = 'reviews/DELETE'

const createReview = (review) => {
    return {
        type: CREATE,
        review
    }
}

const loadUserReviews = (reviews) => {
    return {
        type: USER,
        reviews
    }
}

const loadSpotReviews = (reviews) => {
    return {
        type: SPOT,
        reviews
    }
}

const updateReview = (review) => {
    return {
        type: UPDATE,
        review
    }
}

const deleteReview = (review) => {
    return {
        type: DELETE,
        review
    }
}

export const reviewCreate = (spotId, review) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(review)
      })

    if(response.ok){
        const review = await response.json()
        dispatch(createReview(review))
        // return review
    }
}

export const userReviews = () => async dispatch => {
    const response = await csrfFetch(`/api/reviews/current`)

    if(response.ok){
        const reviews = await response.json()
        dispatch(loadUserReviews(reviews))
        return reviews
    }
}

export const spotReviews = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)

    if(response.ok){
        const reviews = await response.json()
        dispatch(loadSpotReviews(reviews))
        // return reviews
    }
}

export const reviewUpdate = (spotId, review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/:reviewId`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(review)
      })

    if(response.ok){
        const review = await response.json()
        dispatch(updateReview(review))
        // return review
    }
}

export const removeReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"}
      })

    if(response.ok) {
        const review = await response.json()
        dispatch(deleteReview(review))
        return review
    }
}

const initialState = { spot: {}, user: {} }

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case CREATE:
            return {...state, spot: {...state.spot, [action.review.id]: action.review}}
        case USER:
            newState = {...state, user: {...state.user}}
            action.reviews.Reviews.forEach(review => {
                newState.user[review.id] = review
            });
            return newState
        case SPOT:
            newState = {...state, spot: {}, user: {...state.user}}
            action.reviews.Reviews.forEach(review => {
                newState.spot[review.id] = review
            });
            return newState
        case UPDATE:
            return {...state, spot: {...state.spot, [action.review.id]: action.review}}
        case DELETE:
            newState = {...state, spot: {...state.spot}, user: {...state.user}}
            if(newState.spot[action.review.id]) delete newState.spot[action.review.id]
            if(newState.user[action.review.id]) delete newState.user[action.review.id]
            return newState
        default:
            return state
    }
}

export default reviewReducer
