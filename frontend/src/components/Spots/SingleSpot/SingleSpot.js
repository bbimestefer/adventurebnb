import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as spotActions from '../../../store/spots'
import * as reviewActions from "../../../store/reviews";
import ReserveForm from "./ReserveForm";
import "./SingleSpot.css"
import Reviews from "./Reviews";
import CreateReviewForm from "./Reviews/CreateReviewForm";
import OpenModalMenuItem from "../../Navigation/OpenModalMenuItem";
import ImageForm from "../SpotImages/ImageForm";
import DeleteImages from "../SpotImages/DeleteImages";

function SingleSpot () {
    const dispatch = useDispatch()
    const { id } = useParams()
    const user = useSelector(state => state.session.user)
    const [ showForm, setShowForm ] = useState(false)
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef()

    const closeMenu = () => setShowMenu(false);

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
          if (!ulRef.current.contains(e.target)) {
            setShowMenu(false);
          }
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

    const formClick = () => {
        if(showForm) setShowForm(false)
        else setShowForm(true)
    }

    useEffect(() => {
        dispatch(spotActions.getSpotById(id))
        dispatch(reviewActions.spotReviews(id))
    }, [id, dispatch])

    const spot = useSelector(state => state.spots.singleSpot)
    const rating = spot.avgStarRating
    const reviews = Object.values(useSelector(state => state.reviews.spot))

    if(!spot.Owner) return null
    return (
        <div className="wrapper-for-info">
            <div className="header">
                <h2 className="text spot-header">
                    {spot.name}
                </h2>
                <div className="sub-info">
                    <div className='ratings'>
                        <span style={{"width":"4rem"}}><i className="fa-sharp fa-solid fa-star"></i>{isNaN(rating) ? 0 : rating}</span>
                        {spot.numReviews === 1 ?
                            <span style={{"width":"5rem"}}>{spot.numReviews} review </span>
                            :
                            <span style={{"width":"5rem"}}>{spot.numReviews} reviews </span>
                        }

                        <span style={{"width":"20rem"}}>{spot.city}, {spot.state}, {spot.country}</span>
                    </div>
                    {user.id === spot.ownerId && <div className="imageFormButton">
                        <div className="demo-user-button cur">
                            <OpenModalMenuItem
                            className='imageFormButton'
                            style={{"minWidth":"10em"}}
                            itemText="Add Image"
                            onItemClick={closeMenu}
                            modalComponent={<ImageForm  spotId={spot.id}/>}
                            />
                        </div>
                        <div className="demo-user-button cur">
                            <OpenModalMenuItem
                            className='imageFormButton'
                            style={{"minWidth":"10em"}}
                            itemText="Delete Images"
                            onItemClick={closeMenu}
                            modalComponent={<DeleteImages images={spot.SpotImages} closeMenu={closeMenu} spotId={spot.id}/>}
                            />
                        </div>
                    </div>}
                </div>
            </div>
            <div className="image-container">
                {spot.SpotImages?.map((image, i) => (
                    (i < 5 && (i === 0 ?
                    <img key={i} className="first_grid_item" src={image.url} alt={i}/>
                    : <img key={i} className={`grid_item border_${i}`} src={image.url} alt={i}/>))
                ))}
            </div>
            <div className="spotInfo">
                <div className="details">
                    <div className="houseInfo">
                        <div className="host">
                            <h3 style={{"margin":"0", "minWidth":"13em"}}>
                                This home hosted by {spot.Owner.firstName}
                            </h3>
                            <i style={{"fontSize":"30px"}} class="fa-solid fa-user"></i>
                        </div>
                    </div>
                    <div className="reserveFormContainer">
                        <div className="reserve-form"><ReserveForm {...spot} /></div>
                    </div>
                </div>
            </div>
            <div>
                {showForm ? (
                    <CreateReviewForm hideForm={() => setShowForm(false)}/>
                ) : (
                    user && user.id !== spot.ownerId && <button className="create-review-button" onClick={formClick}>Create a review</button>
                )}
                {reviews.length ? (
                    <Reviews reviews={reviews}/>
                ) : (<div>No Reviews</div>)}
            </div>
        </div>
    )
}

export default SingleSpot
