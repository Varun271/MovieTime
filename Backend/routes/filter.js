const express = require('express');
const router = express.Router();
const filtercontroller= require('../controller/filter-movies');


router.post("/",filtercontroller.filterMovies);

module.exports=router