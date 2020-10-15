const router = require("express").Router();
let Booking = require("../model/booking.model");

router.route("/booking").post((req, res) => {
  const email_id = req.body.emailId;
  const user_name = req.body.userName;
  const booking_id = req.body.bookingId;
  const transaction_id = req.body.transactionId;
  const movie_name = req.body.movieName;
  const show_time = req.body.showTime;
  const show_date = req.body.showDate;
  const theatre = req.body.theater;
  const seats = req.body.seats;

  const newBooking = new Booking({
    email_id,
    booking_id,
    transaction_id,
    user_name,
    movie_name,
    show_time,
    show_date,
    theatre,
    seats,
  });

  console.log(newBooking);

  newBooking
    .save()
    .then(() => {
      res.json("Booked");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
