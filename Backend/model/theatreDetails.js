const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const theatreDetailsSchema = new Schema(
  {
    theatre_name: {
      type: String,
    },
    theatre_address: {
      type: String,
    },
  },
  {
      collection : 'theatres'
  }
);

const theatreDetails = mongoose.model("theatreDetails", theatreDetailsSchema);

module.exports = theatreDetails;