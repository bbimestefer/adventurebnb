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

router.put('/:bookingId', requireAuth, async (req, res, next) => {
    const { startDate, endDate } = req.body
    const dateStart = new Date(startDate)
    const dateEnd = new Date(endDate)
    const booking = await Booking.findByPk(req.params.bookingId)

    const bookingStartDate = new Date(booking.startDate)
    const bookingEndDate = new Date(booking.endDate)

    const today = new Date()

    if(!booking){
        res.status(404)
        res.json({
            "message": "Booking couldn't be found",
            "statusCode": 404
          })
    } else if(today.getTime() >= bookingEndDate.getTime()) {
        res.status(403)
        res.json({
            "message": "Past bookings can't be modified",
            "statusCode": 403
          })
    } else if(dateStart.getTime() >= bookingStartDate.getTime() && dateStart.getTime() <= bookingEndDate.getTime() ||
    dateEnd.getTime() >= bookingStartDate.getTime() && dateEnd.getTime() <= bookingEndDate.getTime() ||
    dateStart.getTime() <= bookingStartDate.getTime() && dateEnd.getTime() >= bookingEndDate.getTime()) {
        res.status(403)
        res.json({
            "message": "Sorry, this spot is already booked for the specified dates",
            "statusCode": 403,
            "errors": {
            "startDate": "Start date conflicts with an existing booking",
            "endDate": "End date conflicts with an existing booking"
            }
        })
    } else if(booking.userId !== req.user.id){
        res.status(403)
        res.json({
            "message": "Forbidden",
            "statusCode": 403
        })
    }

    booking.set({
        startDate,
        endDate
    })

    await booking.save()

    res.json(booking)
})


module.exports = router;
