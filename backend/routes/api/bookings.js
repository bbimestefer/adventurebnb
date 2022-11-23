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
                model: Spot
            },
        ]
    })

    res.json({
        Bookings: bookingsOfUser
    })
})

module.exports = router;
