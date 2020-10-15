const e = require('express');
const reviewModel = require('../model/reviewModel');

const addReview = (req, res) => {
    try{
        if(req.session.email){
            const review = new reviewModel({
                movie_id : req.body.movie_id,
                email : req.session.email,
                review : req.body.review
            });
            review.save();
            res.json({message : true})
        }
        else{
            res.json({message : false})
        }
    }
    catch(err){
        res.json({message : err})
    }
}

const getReviews = async (req, res) => {
    try{
        const reviews = await reviewModel.find({"movie_id" : req.body.movie_id})
        console.log(reviews)
            res.json(reviews)
        }
    catch(err){
        res.json({message : err})
    }
}

module.exports.getReviews = getReviews;
module.exports.addReview = addReview;