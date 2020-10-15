const mongoose = require('mongoose');

const MovieData = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    trailor : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    language : {
        type : String,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model( 'MovieData', MovieData,"MovieData");