const express = require('express')
const router = express.Router();
const sequelize = require('sequelize');
const { requireAuth } = require("../../utils/auth.js");
const { User, Spot, SpotImage, ReviewImage, Review } = require('../../db/models');

router.get('/', async (req, res, next) => {
    const spots = await Spot.findAll({
        include: [
            {
                model: SpotImage
            },
            {
                model: Review
            }
        ]
    })

    let spotList = []
    spots.forEach(spot => {
        spotList.push(spot.toJSON())
    });

    spotList.forEach(spot => {
        spot.SpotImages.forEach(image => {
            if(image.preview === true){
                console.log(image)
                spot.previewImage = image.url
            }
        })
        if(!spot.previewImage){
            spot.previewImage = 'no preview image found'
        }
        delete spot.SpotImages
        let total = 0
        spot.Reviews.forEach(review => {
            total += review.stars
        })
        spot.avgRating = total / spot.Reviews.length
        delete spot.Reviews
    })

    res.json(spotList)
})

router.post('/', requireAuth,  async (req, res, next) => {
    const ownerId = req.user.id

    const createdSpot = Spot.create({
        ownerId,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        lat: req.body.lat,
        lng: req.body.lng,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    })

    res.json(createdSpot)
})

router.get('/current', requireAuth, async(req, res, next) => {
    const spotsOfUser = await Spot.findAll({
        where: {
            ownerId: req.user.id
        }
    })

    res.json(spotsOfUser)
})


router.get('/:spotId', async (req, res, next) => {
    let spot = await Spot.findOne({
        where: {
            id: req.params.spotId
        }
    })

    if(!spot){
        // const err = new Error("Spot couldn't be found");
        // err.status = 404;
        // err.title = "No spot";
        // err.errors = ["Spot couldn't be found"];
        // return next(err);
        res.status(404)
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }

    spot = spot.toJSON()

    spot.numReviews = await Review.count({
        where: {
            spotId: req.params.spotId
        }
    })

    const starRatings = await Review.sum('stars',{
        where: {
            spotId: req.params.spotId
        }
    })

    const starCount = await Review.count({
        where: {
            spotId: req.params.spotId
        }
    })

    spot.avgStarRating = starRatings / starCount

    spot.SpotImages = await SpotImage.findAll({
        attributes: ['id', 'url', 'preview'],
        where: {
            spotId: req.params.spotId
        }
    })

    spot.Owner = await User.findOne({
        attributes: ['id', 'firstName', 'lastName'],
        where: {
            id: req.params.spotId
        },
    })

    res.json(spot)
})

module.exports = router;
