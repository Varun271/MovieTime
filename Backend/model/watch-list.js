const mongoose = require('mongoose');

const WatchList = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    movie_id:{
        type:String,
    }
});

module.exports = mongoose.model('WatchList',WatchList,"WatchList");