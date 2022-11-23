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

    const { address, city, state, country, lat, lng, name, description, price } = req.body

    if(!address || !city || !state || !country || !lat || !lng || !name || !description || !price){
        res.status(400)
        res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
              "address": "Street address is required",
              "city": "City is required",
              "state": "State is required",
              "country": "Country is required",
              "lat": "Latitude is not valid",
              "lng": "Longitude is not valid",
              "name": "Name must be less than 50 characters",
              "description": "Description is required",
              "price": "Price per day is required"
            }
          })
    }

    const createdSpot = await Spot.create({
        ownerId,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
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


router.post('/:spotId/images', requireAuth, async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId)
    const { url, preview } = req.body

    if(!spot){
        res.status(404)
        res.json({
            message: 'Spot could not be found',
            "statusCode": 404
        })
    } else if (spot.id !== req.user.id){
        res.status(403)
        res.json({
            "message": "Forbidden",
            "statusCode": 403
        })
    }

    const createdSpotImage = await SpotImage.create({
        spotId: spot.id,
        url,
        preview
    })

    if(!createdSpotImage){
        res.status(400)
        res.json({
            message: 'Need to provide url and preview values'
        })
    }

    const imageForSpot = await SpotImage.findOne({
        where: {
            spotId: req.params.spotId
        }
    })

    if(!imageForSpot) {
        res.status(404)
        res.json({
            message: 'Image for spot was not created'
        })
    }

    res.json({
        id: createdSpotImage.id,
        url: createdSpotImage.url,
        preview: createdSpotImage.preview
    })
})

router.put('/:spotId', requireAuth, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body

    const spot = await Spot.findByPk(req.params.spotId)

    if(!spot){
        res.status(404)
        res.json({
            message: 'Spot could not be found',
            "statusCode": 404
        })
    } else if (spot.id !== req.user.id){
        res.status(403)
        res.json({
            "message": "Forbidden",
            "statusCode": 403
        })
    }

    if(!address || !city || !state || !country || !lat || !lng || !name || !description || !price){
        res.status(400)
        res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
              "address": "Street address is required",
              "city": "City is required",
              "state": "State is required",
              "country": "Country is required",
              "lat": "Latitude is not valid",
              "lng": "Longitude is not valid",
              "name": "Name must be less than 50 characters",
              "description": "Description is required",
              "price": "Price per day is required"
            }
          })
    }

    spot.set({
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })

    await spot.save()

    res.json(spot)

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

router.delete('/:spotId', requireAuth, async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId)

    if(!spot){
        res.status(404)
        res.json({
            message: 'Spot could not be found',
            "statusCode": 404
        })
    } else if (spot.ownerId !== req.user.id){
        res.status(403)
        res.json({
            "message": "Forbidden",
            "statusCode": 403
        })
    } else {
        await spot.destroy()

        res.json({
            "message": "Successfully deleted",
            "statusCode": 200
        })
    }

})


module.exports = router;
