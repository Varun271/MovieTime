
//author : Rutika Patel

const { Mongoose } = require("mongoose")

const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
    email : String,
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('session',sessionSchema);