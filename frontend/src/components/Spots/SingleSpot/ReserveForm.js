import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { bookingCreate } from "../../../store/bookings"
import "./SingleSpot.css"

export default function ReserveForm (spot) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const [ guest, setGuest ] = useState(1)
    const date = new Date()
    const month = date.getMonth() + 1
    const today = `${date.getFullYear()}-${month < 9 ? '0' + String(month) : month}-${date.getDate()}`
    const futureDate = `${date.getFullYear()}-${month < 9 ? '0' + String(month) : month}-${date.getDate() + 5}`
    const [ checkIn, setCheckIn ] = useState(today)
    const [ checkout, setCheckout ] = useState(futureDate)

    const thisDate = new Date(checkout) - new Date(checkIn)
    const numDays = Math.ceil(thisDate / (1000 * 3600 * 24));

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            startDate: checkIn,
            endDate: checkout
        }
        dispatch(bookingCreate(spot.id, payload))
        alert('Your booking has been reserved!')
        setCheckIn(today)
        setCheckout(futureDate)
    }
    const rating = spot.avgStarRating
    return (
        <div className="form-container" style={{"paddingRight": "10px", "paddingLeft": "10px"}}>
            <div>
                <div className="sub-info gap-for-reserve">
                    <div><span style={{"fontWeight": "bold"}}>${spot.price}</span> night</div>
                    <div>
                        <span><i className="fa-sharp fa-solid fa-star"></i>{isNaN(rating) ? 0 : rating} ·</span>
                        {spot.numReviews === 1 ? <span>{spot.numReviews} review </span> : <span>{spot.numReviews} reviews </span>}
                    </div>
                </div>
                <form
                onSubmit={handleSubmit}
                style={{"display":"flex","alignItems":"center", "flexDirection":"column"}}>
                    <div style={{"display":"flex"}}>
                        <label className="reserveFormLabels">
                            CHECK-IN
                            <input type={'date'}
                            name={'check-in'}
                            placeholder={'Add date'}
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            />
                        </label>
                        <label className="reserveFormLabels">
                            CHECKOUT
                            <input type={'date'}
                            name={'checkout'}
                            placeholder={'Add date'}
                            value={checkout}
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
                    {user && user.id !== spot.ownerId ? <button className="reserveFormButton">Reserve</button> : null}
                </form>
            </div>

            <div>
                You will not be charged yet
            </div>
                <div>
                    {checkIn && checkout && (
                        <>
                            <div className="spacing">
                                <span>${spot.price} x {numDays} nights</span>
                                <span>${spot.price * numDays}</span>
                            </div>
                            <div className="spacing">
                                <span>Cleaning Fee</span>
                                <span>${35 * numDays}</span>
                            </div>
                            <div className="spacing">
                                <span>Service Fee</span>
                                <span>${25 * numDays}</span>
                            </div>
                        </>
                    )}
                </div>
        </div>
    )
}
