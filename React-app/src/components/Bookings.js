import React from "react";
import Booking from "./Booking";
import Axios from "axios";
import "./css/Bookings.css";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";

export default class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.bookings = [];
    this.state = {
      display: false,
      pastbookings: [],
      currentbookings: [],
      isUserLoggedIn: true,
    };
  }

  async componentDidMount() {

    const user = await Axios.get("http://localhost:5000/currectUser");
    console.log(user);
    if (user.data.message === false) {
      this.setState({ isUserLoggedIn: false });
    } else {
      this.setState({ isUserLoggedIn: true });
    }



    const pastbooking = await Axios.get(
      `http://localhost:5000/booking/MyPastBookings`
      //`https://group26-project.herokuapp.com/booking/MyPastBookings`
    );
    const currentbooking = await Axios.get(
      `http://localhost:5000/booking/MyCurrentBookings`
      //`https://group26-project.herokuapp.com/booking/MyCurrentBookings`
    );
    this.setState({ pastbookings: pastbooking.data });
    this.setState({ currentbookings: currentbooking.data });
    console.log(this.state.pastbookings);
    console.log(this.state.currentbookings);
  }

  renderSuggestions() {
    
    return (
      <div className="container">
 
    <br /><br />
        <h3>Current Bookings</h3>
        <br />
        <ul id="myul">

          { this.state.currentbookings.length === 0 ? 
              <p>There are no bookings to be displayed!</p> : null
          }

          {Array.isArray(this.state.currentbookings) &&
            this.state.currentbookings.map((item) => (
              <li style={{ marginBottom: "20px" }} key={item.transaction_id}>
                <Booking
                  transactionId={item.transaction_id}
                  date={item.show_date}
                  time={item.show_time}
                  movieName={item.movie_name}
                  theatreName={item.theatre}
                  seat={item.seats}
                ></Booking>
              </li>
            ))}
        </ul>
        
        <br /><br />
        <h3>Past Bookings</h3>
        <br />

        <ul id="myul">

        { this.state.pastbookings.length === 0 ? 
              <p>There are no bookings to be displayed!</p> : null
          }

          {Array.isArray(this.state.pastbookings) &&
            this.state.pastbookings.map((item) => (
              <li style={{ marginBottom: "20px" }} key={item.transaction_id}>
                <Booking
                  transactionId={item.transaction_id}
                  date={item.show_date}
                  time={item.show_time}
                  movieName={item.movie_name}
                  theatreName={item.theatre}
                  seat={item.seats}
                ></Booking>
              </li>
            ))}
        </ul>
     
      
      </div>
    );
  }

  render() {
    if (this.state.isUserLoggedIn === false) {
      window.location.href = "/login";
    } else {
    return (
      <div className="header">
        <Header isUserLoggedIn="true" />
        <div className="container">{this.renderSuggestions()}</div>
      </div>
    );
    }
  }
}
