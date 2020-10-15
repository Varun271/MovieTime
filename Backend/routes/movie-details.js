//Author: Varun Chauhan
const express = require('express')
const router = express.Router()
const movieDetai = require('../controller/movie-details')

router.get("/movie-detail/:id",movieDetai.detail);


module.exports = router