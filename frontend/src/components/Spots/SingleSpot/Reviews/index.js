import ReviewDetails from "./ReviewDetails"

export default function Reviews ({reviews}) {
    // console.log('reviews', reviews)

    return (
        <div>
            {reviews.map(review => (
                <ReviewDetails key={review.id} {...review}/>
            ))}
        </div>
    )
}
