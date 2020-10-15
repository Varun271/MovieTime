const express = require('express')
const router = express.Router()
const theatreDetailsController = require('../controller/theatreDetailsController')

router.get("/TheatreDetails" , theatreDetailsController.theatreDetail);

module.exports = router