const movieModel = require('../model/movieModel');
const e = require('express');

const getMovies = async ( req, res) => {
    try{
        const movies = await movieModel.find().limit(3)
        res.json(movies)
        
    }
    catch(err){
        res.json({message : "No Movies Available"})
    }
}


const getAllMovies = async ( req, res) => {
    try{
        const movies = await movieModel.find()
        res.json(movies)       
    }
    catch(err){
        res.json({message : "No Movies Available"})
    }
}


const getUpcomingMovies = async ( req, res) => {
    try{
        const movies = await movieModel.find({type : "upcoming"})
        res.json(movies)
    }
    catch(err){
        res.json({message : "No Movies Available"})
    }
}
const getRunningMovies = async ( req, res) => {
    try{
        const movies = await movieModel.find({type : "now"})
        res.json(movies)
    }
    catch(err){
        res.json({message : "No Movies Available"})
    }
}

const getMovieById = async ( req, res) => {
    try{
        const movies = await movieModel.find({_id : req.body._id})
        res.json(movies)
    }
    catch(err){
        res.json({message : "No Movies Available"})
    }
}



module.exports.getMovies = getMovies;
module.exports.getRunningMovies = getRunningMovies;
module.exports.getUpcomingMovies = getUpcomingMovies;
module.exports.getAllMovies = getAllMovies;
module.exports.getMovieById = getMovieById;
