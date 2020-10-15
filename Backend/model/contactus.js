const mongoose = require('mongoose');

const UserContact = mongoose.Schema({
   name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    comments : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('UserContactUs',UserContact);