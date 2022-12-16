// import { useState } from "react"
import "./SingleSpot.css"

export default function ReserveForm (spot) {
    // const [ checkIn, setCheckIn ] = useState()
    // const [ checkout, setCheckout ] = useState()
    // const [ guest, setGuest ] = useState(1)
    // const date = new Date()
    // const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    // const futureDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 5}`

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     console.log(checkIn, checkout, guest)
    // }
    const rating = spot.avgStarRating
    return (
        <div className="form-container" style={{"paddingRight": "10px", "paddingLeft": "10px"}}>
            <div>
                <div className="sub-info">
                    <div><span style={{"fontWeight": "bold"}}>${spot.price}</span> night</div>
                    <div>
                        <span><i className="fa-sharp fa-solid fa-star"></i>{isNaN(rating) ? 0 : rating} ·</span>
                        <span>{spot.numReviews} reviews</span>
                    </div>
                </div>
                {/* <form
                onSubmit={handleSubmit}
                style={{"display":"flex","alignItems":"center", "flexDirection":"column"}}>
                    <div style={{"display":"flex"}}>
                    <label>
                        CHECK-IN
                        <input type={'date'}
                        name={'check-in'}
                        placeholder={'Add date'}
                        value={checkIn ? checkIn : today.toString()}
                        onChange={(e) => setCheckIn(e.target.value)}
                        />
                    </label>
                    <label>
                        CHECKOUT
                        <input type={'date'}
                        name={'checkout'}
                        placeholder={'Add date'}
                        value={checkout ? checkout : futureDate.toString()}
                        onChange={(e) => setCheckout(e.target.value)}
                        />
                    </label>
                    </div>
                    <label>
                        Guest
                        <input type={'number'}
                        name={'guest'}
                        placeholder={'1 guest'}
                        value={guest}
                        onChange={(e) => setGuest(e.target.value)}
                        />
                    </label>
                    <button>Reserve</button>
                </form> */}
            </div>
{/*
            <div>
                You will not be charged yet
            </div>
                <div>
                    {checkIn && checkout && (
                        <>
                            <div className="spacing">
                                <span>${spot.price} x 5 nights</span>
                                <span>${spot.price * 5}</span>
                            </div>
                            <div className="spacing">
                                <span>Cleaning Fee</span>
                                <span>${35 * 5}</span>
                            </div>
                            <div className="spacing">
                                <span>Service Fee</span>
                                <span>${25 * 5}</span>
                            </div>
                        </>
                    )}
                </div> */}
        </div>
    )
}
