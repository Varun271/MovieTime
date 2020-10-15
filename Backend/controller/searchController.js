const MoviessearchSchema = require("../model/searchModel");

//gets all the movies
exports.getMovies = (req, res, next) => {
  const mvtitle = req.params.title;

  MoviessearchSchema.find()
    .then((movies) => {
      console.log(movies);
      res.json(movies);
    })
    .catch((err) => {
      next(err);
    });
};

//gets the movies based on the title of the movie
exports.getMoviesbyname = (req, res, next) => {
  MoviessearchSchema.find({ title: "scoob" })
    .then((movies) => {
      res.json(movies);
      console.log(movies);
    })

    .catch((err) => {
      next(err);
    });
};
