import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { csrfFetch } from '../../../store/csrf'
import { getSpotById } from '../../../store/spots'
import './ImageForm.css'

function ImageForm({spotId}) {
    const dispatch = useDispatch()
    const history = useHistory()
    // const [ numImages, setNumImages ] = useState(1)
    const [ image, setImage ] = useState('')
    const [ errors, setErrors ] = useState([])

    const clearData = () => {
        setImage('')

        history.push('/spots/' + spotId)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await csrfFetch(`/api/spots/${spotId}/images`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({url: image, preview: false})
          })
          .then(createdImage => dispatch(getSpotById(spotId)))
          .then(() => clearData())
          .catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
                console.log(data)
            });
        // dispatch(bookingCreate(spot.id, payload))
        // alert('Your booking has been reserved!')
        // setCheckIn(today)
        // setCheckout(futureDate)
    }
    return (
        <div>
            <form className='imageForm' onSubmit={handleSubmit}>
                {errors.length !== 0 &&
                    <ul style={{"marginBottom":"0px"}}>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                }
                <label className="reserveFormLabels">
                    {'Add your Image'}
                    <input type={'url'}
                    name={`image${1}`}
                    placeholder={'Add image url'}
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <button className='demo-user-button' style={{"width":"fitContent"}}>Submit</button>
            </form>
        </div>
    )
}

export default ImageForm
