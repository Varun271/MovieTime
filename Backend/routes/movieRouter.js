const express = require('express')
const router = express.Router()
const movieController = require('../controller/movieController')

router.get('/getMovies',movieController.getMovies);
router.get('/getRunningMovies',movieController.getRunningMovies);
router.get('/getUpcomingMovies',movieController.getUpcomingMovies);
router.get('/getAllMovies',movieController.getAllMovies);
router.post('/getMovieById',movieController.getMovieById);


module.exports = router