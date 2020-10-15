const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({
   movie_id : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    review : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('reviews',reviewSchema,"reviews");