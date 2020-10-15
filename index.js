const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");
const db = require("./Backend/database/connection");
const bodyParser = require("body-parser");
const session = require('express-session');

//all routers
const userRouter = require("./Backend/routes/userRouter");
const userContactRouter = require("./Backend/routes/userContactRoute");
const bookingRouter = require("./Backend/routes/booking");
const MyBookingsRouter = require("./Backend/routes/myBookingsRouter");
const TicketGenerationRouter = require("./Backend/routes/ticketGenerationRouter");
const TheatreDetailsRouter = require("./Backend/routes/theatreDetailsRouter");
const SearchRouter = require("./Backend/routes/SearchRoute");
const movieRouter = require("./Backend/routes/movieRouter");
const reviewRouter = require("./Backend/routes/reviewRouter");
const watchListRouter = require("./Backend/routes/watchListRouter")
const filter= require('./Backend/routes/filter')


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/React-app/build/"));
app.use(session({
  secret : "key",
  resave : false,
  saveUninitialized : false,
  cookie : {
    maxAge : 1000 * 60 * 60
  }
}))

//calling routes
app.use("/", userRouter);
app.use("/", userContactRouter);
app.use("/book", bookingRouter);
app.use("/tickets", TicketGenerationRouter);
app.use("/booking", MyBookingsRouter);
app.use("/theatre", TheatreDetailsRouter);
app.use("/search", SearchRouter);
app.use("/movie",movieRouter);
app.use("/review",reviewRouter)
app.use("/watchList",watchListRouter)
app.use('/filter',filter)


app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/React-app/build/index.html"));
});

app.listen(process.env.PORT || 5000, function () {
  console.log("started ");
});
