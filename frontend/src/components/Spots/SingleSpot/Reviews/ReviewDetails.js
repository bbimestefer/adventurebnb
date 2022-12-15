import { useDispatch } from "react-redux"
import { removeReview } from "../../../../store/reviews"

export default function ReviewDetails (review) {

    const dispatch = useDispatch()
    // console.log('review', review)

    const deleteAReview = async () => {
        const deletedReview = await dispatch(removeReview(review.id))
        console.log(deletedReview)
        console.log('success')
    }

    if(!review.User) return null
    return (
        <div style={{"marginTop":"30px","display":"flex", "gap":"100px", "borderBottom":"lightGray 1px solid"}}>
            <div>
                <h4 style={{"marginBottom":"0px"}}>
                    {review.User.firstName} {review.User.lastName}
                </h4>
                <p style={{"marginTop":"0px"}}>
                    {review.review}
                </p>
            </div>
            {review.ReviewImages.length ? (
                <img style={{"height":"100px", "width":"100px"}} src={review.ReviewImages[0].url} alt={'pic'}/>
            ) : (null)}

            <button onClick={deleteAReview}>Delete review</button>
        </div>
    )
}
