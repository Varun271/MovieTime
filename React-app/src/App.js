import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import Bookings from "./components/Bookings";
import ForgotPassword from "./components/ForgotPassword";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import { BookComponent } from "./components/BookComponent";
import { Payment } from "./pages/Payment";
import { SeatSelection } from "./pages/SeatSelection";
import TicketGeneration from "./components/TicketGeneration";
import WatchList from "./pages/WatchList";
import Footer from "./components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header isUserLoggedIn="true" /> */}

          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/offers" component={Offers} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/MyAccount" component={MyAccount} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/movie/:id" component={Movie} />
          <Route exact path="/book/:id" component={BookComponent} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/seat" component={SeatSelection} />
          <Route exact path="/ticket/:id" component={TicketGeneration} />
          <Route exact path="/watchList" component={WatchList} />
        </div>
        <Footer/>
      </Router>
    );
  }
}
