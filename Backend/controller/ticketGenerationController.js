const router = require('express').Router();
let Booking = require('../model/booking.model');



const ticketGeneration = async (req, res) => {
    
    const id = req.query.id;
    Booking.find({booking_id : id})
    .then(ticket => res.json(ticket))
    .catch(err => res.status(400).json('Error :' +err));

}


module.exports.ticketGeneration = ticketGeneration;