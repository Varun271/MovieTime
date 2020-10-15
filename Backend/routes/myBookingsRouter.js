const express = require('express')
const router = express.Router()
const bookingController = require('../controller/bookingController')

router.get("/MyPastBookings" , bookingController.myPastBookings);
router.get("/MyCurrentBookings" , bookingController.myCurrentBookings);

module.exports = router