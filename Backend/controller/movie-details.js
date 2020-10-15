const movieDetail = require('../model/movieModel.js')


exports.detail = (req, res) => {
    var id = req.params.id;

    movieDetail.find({_id:id}).then(doc=>{
        console.log("doc")
        res.status(200).json(doc)
    }).catch(err=>{
        console.log("err")
        res.status(400).json(err)
    });
};