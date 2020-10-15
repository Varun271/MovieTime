const router = require('express').Router();
let Booking = require('../model/booking.model');


const myPastBookings = async (req, res) =>  {
  
    var session = req.session.email;
    console.log(session);

    var d = new Date();
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) 
    month = '0' + month;
    if (day.length < 2) 
    day = '0' + day;

    var date = [year, month, day].join('-');
  
    // Booking.find({show_date: { $lt: new Date()} } )
    // .then(pastbooking => res.json(pastbooking))
    // .catch(err => res.status(400).json('Error :' +err));

    Booking.find({email_id: session } )
    .then(pastbooking =>{ 
    
        console.log(pastbooking);
        var pbooking = [];
        for(var i =0;i<pastbooking.length;i++){
            let x = new Date(pastbooking[i].show_date);
            let y = new Date(date);
            if(x < y)
            {
                pbooking.push(pastbooking[i]);
            }
    }
    console.log(pbooking);
    res.json(pbooking);

    })
    .catch(err => res.status(400).json('Error :' +err));


}

const myCurrentBookings = async (req, res) => {
    
    var session = req.session.email;
    console.log(session);

    var d = new Date();
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) 
    month = '0' + month;
    if (day.length < 2) 
    day = '0' + day;

    var date = [year, month, day].join('-');
  
    // Booking.find({show_date: { $lt: new Date()} } )
    // .then(pastbooking => res.json(pastbooking))
    // .catch(err => res.status(400).json('Error :' +err));

    Booking.find({email_id: session } )
    .then(currentbooking =>{ 
    
        console.log(currentbooking);
        var cbooking = [];
        for(var i =0;i<currentbooking.length;i++){
            let x = new Date(currentbooking[i].show_date);
            let y = new Date(date);
            if( +x >= +y)
            {
                cbooking.push(currentbooking[i]);
            }
        }
        console.log(cbooking);
        res.json(cbooking);

    })
    .catch(err => res.status(400).json('Error :' +err));

}

module.exports.myPastBookings = myPastBookings;
module.exports.myCurrentBookings = myCurrentBookings;