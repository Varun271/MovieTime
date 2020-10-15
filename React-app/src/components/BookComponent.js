import React from "react";
import Axios from "axios";
import BookingData from "./BookingData";
import Header from "./Header";

export class BookComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      movieData: [],
      fields: {},
    };
    this.handleSubmit = this.handleChange.bind(this);
    this.openSeat = this.openSeat.bind(this);
  }

  async componentDidMount() {
    Axios({
      method : "GET",
      url : "http://localhost:5000/currectUser",
    }).then((response) => {
        if(response.data.message === false)  {
          window.location.href = "/login"
        }
    });

    let apiKey = "d8bcf125fed775e8aa6239f8a8b1e3e6";
    const movie = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${apiKey}&language=en-US`
    );
    this.setState({ movieData: movie.data });
  }

  openSeat(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var theater = document.getElementById("theater").value;
    if (name === "" || date === "" || time === "" || theater === "") {
      alert("Fields cannot be empty");
    } else {
      BookingData.setMovieName(this.state.movieData.title);
      window.location.href = "/seat";
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    if (field === "name") {
      BookingData.setName(e.target.value);
      console.log(BookingData.getName());
    }
    if (field === "date") {
      BookingData.setDate(e.target.value);
      console.log(BookingData.getDate());
    }
    if (field === "time") {
      BookingData.setTime(e.target.value);
      console.log(BookingData.getTime());
    }
    if (field === "theater") {
      BookingData.setTheater(e.target.value);
      console.log(BookingData.getTheater());
    }
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <Header isUserLoggedIn="true" />
        <div id="movieName" className="container">
          <h2>{this.state.movieData.title}</h2>
          <hr />
        </div>
        <div className="container" id="bookingForm">
          <h3>Book your Tickets</h3> <hr />
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
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange.bind(this, "name")}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="date" className="col-sm-2 col-form-label">
                Date
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  placeholder="Enter Date"
                  min="2020-07-26"
                  onChange={this.handleChange.bind(this, "date")}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="time" className="col-sm-2 col-form-label">
                Movie Time
              </label>
              <div className="col-sm-10">
                <input
                  type="time"
                  className="form-control"
                  id="time"
                  name="time"
                  placeholder="Time"
                  onChange={this.handleChange.bind(this, "time")}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col">
                <select
                  name="theater"
                  id="theater"
                  className="form-control"
                  placeholder="Select Theater"
                  onChange={this.handleChange.bind(this, "theater")}
                >
                  <option defaultValue>Select Theater</option>
                  <option value="Carbon Arc Cinema">Carbon Arc Cinema</option>
                  <option value="Cineplex Cinemas Park Lane">
                    Cineplex Cinemas Park Lane
                  </option>
                  <option value="Scotiabank Theatre Halifax">
                    Scotiabank Theatre Halifax
                  </option>
                  <option value="New Harbour Video">New Harbour Video</option>
                  <option value="Cineplex Cinemas Dartmouth Crossing">
                    Cineplex Cinemas Dartmouth Crossing
                  </option>
                  <option value="alFresco filmFesto">alFresco filmFesto</option>
                </select>
              </div>
            </div>
            <button className="btn-lg btn-success" onClick={this.openSeat}>
              Select Seat
            </button>
          </form>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
