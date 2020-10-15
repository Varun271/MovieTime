const express = require('express')
const router = express.Router()
const ticketGenerationController = require('../controller/ticketGenerationController')

router.get("/TicketGeneration" , ticketGenerationController.ticketGeneration);

module.exports = router