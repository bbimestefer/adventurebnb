const express = require('express')
const router = express.Router();
const sequelize = require('sequelize');
const { requireAuth } = require("../../utils/auth.js");
const { User, Spot, Booking, SpotImage, ReviewImage, Review } = require('../../db/models');

router.get('/current', requireAuth, async (req, res, next) => {
    const userId = req.user.id

    const bookingsOfUser = await Booking.findAll({
        where: {
            userId
        },
        include: [
            {
                model: Spot,
                attributes: [ 'id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price' ],
                include: [
                    {
                        model: SpotImage,
                        attributes: ['url']
                    }
                ]
            },
        ]
    })

    let bookingList = []
    bookingsOfUser.forEach(booking => {
        bookingList.push(booking.toJSON())
    })


    const newBookings = []
    bookingList.forEach((booking) => {
        booking.Spot.previewImage = booking.Spot.SpotImages[0].url

        delete booking.Spot.SpotImages
        console.log(booking)
        newBookings.push(booking)
    });



    res.json({
        Bookings: newBookings
    })
})

module.exports = router;
