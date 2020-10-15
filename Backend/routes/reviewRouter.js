const express = require('express')
const router = express.Router()
const reviewController = require('../controller/reviewController')

router.post('/getReviews',reviewController.getReviews);
router.post('/addReview',reviewController.addReview);


module.exports = router