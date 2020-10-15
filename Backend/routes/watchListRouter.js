const express = require('express')
const router = express.Router()
const watchListController = require('../controller/watchListController')

router.get('/getList',watchListController.getList);
router.post('/addList',watchListController.addList);
router.post('/removeMovie',watchListController.removeMovie);


module.exports = router