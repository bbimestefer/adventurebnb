export default function ReviewDetails (review) {
    console.log(review)
    console.log(review.User.firstName)
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
            <img style={{"height":"100px", "width":"100px"}} src={review.ReviewImages[0].url}/>
        </div>
    )
}
