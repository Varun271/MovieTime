const router = require('express').Router();
let theatreDetails = require('../model/theatreDetails');



const theatreDetail = async (req, res) => {
    
    const theatre_name = req.query.theatrename;
    theatreDetails.find({theatre_name : theatre_name})
    .then(theatre => res.json(theatre))
    .catch(err => res.status(400).json('Error :' +err));

}


module.exports.theatreDetail = theatreDetail;