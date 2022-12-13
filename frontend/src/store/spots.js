// const CREATE = 'spots/CREATE'
const SINGLE = 'spots/SINGLE'
const LOAD = 'spots/LOAD'
// const UPDATE = 'spots/UPDATE'
// const DELETE = 'spots/DELETE'

// const createSpot = (spot) => {
//     return {
//         type: CREATE,
//         payload: spot
//     }
// }

const loadSpots = (spots) => {
    return {
        type: LOAD,
        spots
    }
}

const oneSpot = (spot) => {
    return {
        type: SINGLE,
        spot
    }
}

// const update = (spot) => {
//     return {
//         type: UPDATE,
//         spot
//     }
// }

// const remove = (id) => {
//     return {
//         type: DELETE,
//         id
//     }
// }

export const getAllSpots = () => async dispatch => {
    const response = await fetch('/api/spots')

    if(response.ok) {
        const spots = await response.json()
        dispatch(loadSpots(spots))
    }
}

export const getSpotById = (id) => async dispatch => {
    const response = await fetch(`/api/spots/${id}`)

    if(response.ok){
        const spot = await response.json()
        dispatch(oneSpot(spot))
        return spot
    }
}


const initialState = { allSpots: {}, singleSpot: {}}

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        // case CREATE:
        case LOAD:
            newState = {...state, allSpots: {...state.allSpots}}
            // console.log(action.spots)
            action.spots.Spots.forEach(spot => {
                newState.allSpots[spot.id] = spot
            });
            return newState
        case SINGLE:
            newState = {...state, allSpots: {...state.allSpots}}
            newState.singleSpot = action.spot
            return newState
        // case UPDATE:
        // case DELETE:
        default:
            return state
    }
}

export default spotsReducer
