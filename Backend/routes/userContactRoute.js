//Author: Varun Chauhan
const express = require('express')
const router = express.Router()
const userContactController = require('../controller/contactus')

router.post("/userContact",userContactController.contactus);


module.exports = router