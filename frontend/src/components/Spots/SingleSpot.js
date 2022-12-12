import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as spotActions from '../../store/spots'

function SingleSpot () {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(spotActions.getSpotById(id))
    }, [id, dispatch])



    return (
        <div>
            <p>This should be the page im redirected to {id}</p>
        </div>
    )
}

export default SingleSpot
