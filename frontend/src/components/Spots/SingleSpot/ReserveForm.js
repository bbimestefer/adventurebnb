import { useState } from "react"
import "./SingleSpot.css"

export default function ReserveForm (spot) {
    const [ checkIn, setCheckIn ] = useState()
    const [ checkout, setCheckout ] = useState()
    const [ guest, setGuest ] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(checkIn, checkout)
    }
    return (
        <div className="form-container" style={{"paddingRight": "10px", "paddingLeft": "10px"}}>
            <div>
                <div className="sub-info">
                    <div><span style={{"fontWeight": "bold"}}>${spot.price}</span> night</div>
                    <div>
                        <span><i className="fa-sharp fa-solid fa-star"></i>{spot.avgStarRating} ·</span>
                        <span>{spot.numReviews} reviews</span>
                    </div>
                </div>
                <form
                onSubmit={handleSubmit}
                style={{"display":"flex","alignItems":"center", "flexDirection":"column"}}>
                    <div style={{"display":"flex"}}>
                    <label>
                        CHECK-IN
                        <input type={'date'}
                        name={'check-in'}
                        placeholder={'Add date'}
                        // value={checkIn}
                        // onChange={(e) => setCheckIn(e.target.value)}
                        />
                    </label>
                    <label>
                        CHECKOUT
                        <input type={'date'}
                        name={'checkout'}
                        placeholder={'Add date'}
                        // value={checkout}
                        // onChange={(e) => setCheckout(e.target.value)}
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
                </form>
            </div>

            <div>
                You will not be charged yet
            </div>
            <section>
                <div>
                    {checkIn && checkout && (
                        <div>calcutlating price...</div>
                    )}
                </div>
            </section>
        </div>
    )
}
