const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//properties
const MoviessearchSchema = new Schema(
  {
    popularity: {
      type: Number,
    },
    vote_count: {
      type: Number,
    },
    video: {
      type: Boolean,
    },
    poster_path: {
      type: String,
    },
    id: {
      type: Number,
    },
    adult: {
      type: Boolean,
    },
    backdrop_path: {
      type: String,
    },
    original_language: {
      type: String,
    },
    original_title: {
      type: String,
    },
    genre_ids: {
      type: [Number],
    },
    title: {
      type: String,
    },
    vote_average: {
      type: Number,
    },
    overview: {
      type: String,
    },
    release_date: {
      type: Date,
    },
  },
  { collection: "Moviessearch" }
);

const Search = mongoose.model("Moviessearch", MoviessearchSchema);
module.exports = Search;
