const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    email_id: {
      type: String,
    },
    booking_id: {
      type: String,
    },
    transaction_id: {
      type: String,
    },
    user_name: {
      type: String,
    },
    movie_name: {
      type: String,
    },
    show_time: {
      type: String,
    },
    show_date: {
      type: String,
    },
    theatre: {
      type: String,
    },
    seats: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
