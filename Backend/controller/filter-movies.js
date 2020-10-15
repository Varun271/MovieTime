const filterschema = require('../model/movieModel.js')

exports.filterMovies = (req, res) => {
    var genre = req.body.genre;
    var language = req.body.language;

    if (genre != '' && language != '') {
        var filterParameter = {
            $and: [{ genre: genre },
            { $and: [{ language: language }] }]
        }
    } else if (genre != '' && language === '') {
        var filterParameter = { genre: genre }
    }
    else if (genre === '' && language != '') {
        var filterParameter = { language: language }
    } else if(genre === '' && language === ''){
        var filterParameter = {}
    }

    filterschema.find(filterParameter).then(result=>{
        res.send(result)
    }).catch(err=>{
        console.log("err")
        res.status(400).send(err)
    });
    
};