const watchListModel = require('../model/watch-list');
const e = require('express');
const movieModel = require("../model/movieModel")

const addList = async (req, res) =>{
    try{
        if(req.session.email){
            const list = await watchListModel({
                movie_id : req.body.movie_id,
                email : req.session.email
            })
            const movieCheck = await watchListModel.find({email : req.session.email},{movie_id: req.body.movie_id})
            console.log(movieCheck.length)
            if(movieCheck.length === 0){
                list.save();
                res.json({message : true})
            }
        }
        else{
            res.json({message : false})
        }
    }
    catch(err){
        res.json({message : err})
    }
}

const getList = async (req, res) =>{
    try{
        const listOfMovies = []
        if(req.session.email){
            const movies = await watchListModel.find({email : req.session.email})
            for(const mov of movies){
                const eachMovie = await movieModel.find({_id:mov.movie_id})
                listOfMovies.push(eachMovie[0])
            }
            console.log(listOfMovies)
            if(movies.length === 0){
                res.json({message : "No Movies Added Yet"})
            }
            else{
                res.json(listOfMovies)
            }
        }
        else{
            res.json({message : false})
        }
    }
    catch(err){
        res.json({message : err})
    }
}

const removeMovie = async (req, res) =>{
    try{
        if(req.session.email){
            const movies = await watchListModel.deleteOne({email : req.session.email},{movie_id: req.body.movie_id})
            res.json({message : true})
        }
        else{
            res.json({message : "Please Login First"})
        }
    }
    catch(err){
        res.json({message : err})
    }
}

module.exports.getList = getList
module.exports.addList = addList
module.exports.removeMovie = removeMovie