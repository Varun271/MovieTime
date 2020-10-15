import React from "react";
import BookingData from "./BookingData";
import Axios from "axios";
import Header from "./Header";

export class PaymentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: BookingData.getName(),
      date: BookingData.getDate(),
      time: BookingData.getTime(),
      theater: BookingData.getTheater(),
    };
  }

  Ticket(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var cvv = document.getElementById("cvv").value;
    var exdate = document.getElementById("exdate").value;

    if (name === "" || cardNumber === "" || cvv === "" || exdate === "") {
      alert("Fields cannot be empty");
    } else if (cardNumber.length > 16 || cardNumber.length < 16) {
      alert("Invalid Card Number. Please enter 16 digit card number");
    } else {
      Axios.post(`http://localhost:5000/book/booking`, {
        emailId: BookingData.getEmail(),
        bookingId:
          "BKID00" +
          BookingData.getName().replace(/[^a-zA-Z0-9]/g, "") +
          "00" +
          BookingData.getDate().replace(/[^a-zA-Z0-9]/g, ""),
        transactionId:
          "T000" +
          BookingData.getDate().replace(/[^a-zA-Z0-9]/g, "") +
          "00" +
          BookingData.getTime().replace(/[^a-zA-Z0-9]/g, ""),
        userName: BookingData.getName(),
        movieName: BookingData.getMovieName(),
        showTime: BookingData.getTime(),
        showDate: BookingData.getDate(),
        theater: BookingData.getTheater(),
        seats: BookingData.getSelectedSeats(),
      }).then(
        (response) => {
          console.log(response);
          alert("Tickets Booked Successfully");
          window.location.href =
            "/ticket/" +
            "BKID00" +
            BookingData.getName().replace(/[^a-zA-Z0-9]/g, "") +
            "00" +
            BookingData.getDate().replace(/[^a-zA-Z0-9]/g, "");
        },
        (error) => {
          console.log(error);
          alert("Tickets were not booked.");
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Header isUserLoggedIn="true" />
        <div id="movieName">
          <a href="/movie">
            <h2>Movie : {BookingData.getMovieName()}</h2>
          </a>
        </div>

        <div className="container" id="bookingForm">
          <h2>Payment Information</h2>
          <hr />
          <br />

          <form>
            <div className="form-group row">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="amount" className="col-sm-2 col-form-label">
                Amount
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="amount"
                  value={JSON.parse(BookingData.getSelectedSeats()).length * 10}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="cardNumber" className="col-sm-2 col-form-label">
                Card Number
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="cardNumber"
                  placeholder="16 digit Card Number"
                  min="1111111111111111"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="cvv" className="col-sm-2 col-form-label">
                CVV
              </label>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  placeholder="cvv"
                  id="cvv"
                  min="001"
                  required
                />
              </div>
              <label htmlFor="exdate" className="col-sm-3 col-form-label">
                Ex. Date
              </label>
              <div className="col">
                <input
                  type="month"
                  className="form-control"
                  placeholder="Ex-Date"
                  id="exdate"
                  min="2022-01"
                  max="2029-01"
                  required
                />
              </div>
            </div>

            <br />
            <button className=" btn-lg btn-success" onClick={this.Ticket}>
              Confirm
            </button>
          </form>
        </div>
      </div>
    );
  }
}
