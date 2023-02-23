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
    const [ errors, setErrors ] = useState([])

    const thisDate = new Date(checkout) - new Date(checkIn)
    const numDays = Math.ceil(thisDate / (1000 * 3600 * 24));

    const updateCheckIn = (e) => setCheckIn(e.target.value)
    const updateCheckout = (e) => setCheckout(e.target.value)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            startDate: checkIn,
            endDate: checkout
        }
        await dispatch(bookingCreate(spot.id, payload))
        .then(() => {
            setErrors([])
            alert('Your booking has been reserved!')
            setCheckIn(today)
            setCheckout(futureDate)
        })
        .catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(Object.values(data.errors));
            }
        );
    }
    const rating = spot.avgStarRating
    return (
        <div className="form-container">
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
                    {errors.length !== 0 &&
                        <ul style={{"marginBottom":"0px"}}>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                    }
                    <div style={{"display":"flex"}}>
                        <label className="reserveFormLabels">
                            CHECK-IN
                            <input type={'date'}
                            name={'check-in'}
                            placeholder={'Add date'}
                            min={today}
                            value={checkIn}
                            onChange={updateCheckIn}
                            />
                        </label>
                        <label className="reserveFormLabels">
                            CHECKOUT
                            <input type={'date'}
                            name={'checkout'}
                            min={checkIn}
                            placeholder={'Add date'}
                            value={checkout}
                            onChange={updateCheckout}
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
