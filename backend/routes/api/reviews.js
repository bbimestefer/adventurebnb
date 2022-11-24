const express = require('express')
const router = express.Router();
const sequelize = require('sequelize');
const { Op } = require('sequelize');
const { requireAuth } = require("../../utils/auth.js");
const { User, Spot, Booking, Review, SpotImage, ReviewImage } = require('../../db/models');

router.get('/current', requireAuth, async (req, res, next) => {
    const userId = req.user.id
    const reviews = await Review.findAll({
        where: {
            userId
        },
        include: [
            {
                model: User,
                attributes: [ 'id', 'firstName', 'lastName' ]
            },
            {
                model: Spot,
                attributes: {
                    exclude: [ 'description', 'createdAt', 'updatedAt' ]
                },
                include: [
                    {
                        model: SpotImage
                    }
                ]
            },
            {
                model: ReviewImage,
                attributes: [ 'id', 'url' ]
            }
        ]
    })

    let reviewList = []
    reviews.forEach(review => {
        reviewList.push(review.toJSON())
    });

    reviewList.forEach(async (review) => {
        review.Spot.SpotImages.forEach(image => {
            if(image.preview === true){
                review.Spot.previewImage = image.url
            }
        });
        delete review.Spot.SpotImages
    });


    res.json({
        Reviews: reviewList
    })
})


module.exports = router;
