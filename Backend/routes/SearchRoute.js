const express = require("express");
const searchController = require("../controller/searchController");

const router = express.Router();

router.get("/movies", searchController.getMovies);

module.exports = router;
