import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { createSpot, createSpotImage } from "../../store/spots"
import './CreateSpotForm.css'

export default function CreateSpotForm () {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const [ address, setAddress ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state, setState ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ lat, setLat ] = useState('')
    const [ lng, setLng ] = useState('')
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ imageNumber, setImageNumber ] = useState('')
    const [ url, setURL ] = useState('')
    const [ errors, setErrors ] = useState([])
    // const [ spotImages ] = useState([])

    const updateAddress = (e) => setAddress(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updateState = (e) => setState(e.target.value)
    const updateCountry = (e) => setCountry(e.target.value)
    const updateLat = (e) => setLat(e.target.value)
    const updateLng = (e) => setLng(e.target.value)
    const updateName = (e) => setName(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updatePrice = (e) => setPrice(e.target.value)
    const updateImageNumber = (e) => setImageNumber(e.target.value)
    const updateURL = (e) => setURL(e.target.value)

    const clearData = (createdSpot) => {
        setAddress('')
        setCity('')
        setState('')
        setCountry('')
        setLat('')
        setLng('')
        setName('')
        setDescription('')
        setPrice('')
        setErrors([])

        history.push(`/spots/${createdSpot.id}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()


        const payload = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price
        }

        const spotImage = {
            url,
            preview: true
        }

        let createdSpot = await dispatch(createSpot(payload)).then(createdSpot => clearData(createdSpot)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });

        if(!errors.length) {
            if(createdSpot){
                let newImage = await dispatch(createSpotImage(createdSpot.id, spotImage))
                if(!newImage){
                    alert('Invalid Image. Please edit your image url.')
                }
            }
        }
    }

    const demoSpot = async () => {
        const payload = {
            address: '2345 New Valley Way',
            city: "Westminster",
            state: "Maryland",
            country: "United States",
            lat: 34,
            lng: 57,
            name: "Hills & Home",
            description: "Rolling hills",
            price: 120
        }
        const spotImage = {
            url: 'https://a0.muscache.com/im/pictures/e69b3403-3d09-4f3f-b997-1a21164d1ee7.jpg?im_w=720',
            preview: true
        }

        let createdSpot = await dispatch(createSpot(payload))

        if(createdSpot){
            let newImage = await dispatch(createSpotImage(createdSpot.id, spotImage))
            if(!newImage){
                alert('Invalid Image. Please edit your image url.')
            }
            history.push(`/spots/${createdSpot.id}`)
        }
    }

    return (
        <div style={{"display":"flex", "alignItems":"center", "justifyContent":"center"}}>
            <button onClick={demoSpot}>Demo spot</button>
            <form className="create-spot-form" onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <h4>{user.firstName}, fill out this form to create your house!</h4>
                <input style={{"borderRadius":"10px 10px 0px 0px"}}
                    type={'text'}
                    placeholder={'Address'}
                    required
                    value={address}
                    onChange={updateAddress}
                />
                <input
                    type={'text'}
                    placeholder={'City'}
                    required
                    value={city}
                    onChange={updateCity}
                />
                <input
                    type={'text'}
                    placeholder={'State'}
                    required
                    value={state}
                    onChange={updateState}
                />
                <input
                    type={'text'}
                    placeholder={'Country'}
                    required
                    value={country}
                    onChange={updateCountry}
                />
                <input
                    type={'number'}
                    placeholder={'Latitude'}
                    value={lat}
                    onChange={updateLat}
                />
                <input
                    type={'number'}
                    placeholder={'Longitude'}

                    value={lng}
                    onChange={updateLng}
                />
                <input
                    type={'text'}
                    placeholder={'Name of House'}
                    required
                    value={name}
                    onChange={updateName}
                />
                <input
                    type={'text'}
                    placeholder={'Description'}
                    required
                    value={description}
                    onChange={updateDescription}
                />
                <input style={{"borderRadius":"0px 0px 10px 10px", "marginBottom": "10px"}}
                    type={'number'}
                    placeholder={'Price per night'}
                    required
                    value={price}
                    onChange={updatePrice}
                />
                <input style={{"borderRadius":"10px", "marginBottom": "10px"}}
                    type={'number'}
                    placeholder={'Number of Spot images'}
                    value={imageNumber}
                    onChange={updateImageNumber}
                />
                <input style={{"borderRadius":"10px", "marginBottom": "10px"}}
                    type={'text'}
                    placeholder={'Cover image url'}
                    value={url}
                    onChange={updateURL}
                />
                <button className="submitButton">Submit</button>
            </form>
        </div>
    )
}
