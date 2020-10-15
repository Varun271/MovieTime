import React from "react";
import Axios from "axios";
import { Row, Col } from "react-bootstrap";
import logo from './photos/logo.png';
//import QRCode from "../components/photos/QRCode.jpeg";
import "../components/css/ticketCss.css";
import QRCode from "qrcode.react";
import Header from "../components/Header";

export default class TicketGeneration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      seats: "",
      theatreDetails: [],
      id: props.match.params.id,
    };
  }

  async componentDidMount() {
    const ticket = await Axios.get(
      `https://group26-project.herokuapp.com/tickets/TicketGeneration?id=${this.state.id}`
    );
    console.log(ticket.data);
    this.setState({ data: ticket.data[0] });
  
    console.log(this.state.data);
    const theatre = await Axios.get(
      `https://group26-project.herokuapp.com/theatre/TheatreDetails?theatrename=${this.state.data.theatre}`
    );
    console.log(theatre.data);
    this.setState({ theatreDetails: theatre.data[0] });
  }

  render() {
    let code = this.state.data.booking_id;
    let qrcodeImage;
    if (code != null) {
      qrcodeImage = <QRCode value={code} />;
    }

    return (
      <div>
        <Header isUserLoggedIn="true" />
        <div className="container" id="ticket">
          <Row>
            <Col>
            <img src={logo} alt="movieposter"/>
            </Col>
            <Col>
              <p>
                <b>Movie Name :</b> {this.state.data.movie_name}
                <br></br>
                <b>Theatre Name :</b> {this.state.data.theatre}
                <br></br>
                <b>Location :</b>  {this.state.theatreDetails.theatre_address}
                <br></br>
                <b>Date :</b>  {this.state.data.show_date}
                <br></br>
                <b>Time :</b>  {this.state.data.show_time}
                <br></br>
                <b>Seats :</b>  {this.state.data.seats}
                <br></br>
                <b>Booking ID :</b> {this.state.data.booking_id}
                <br></br>
              </p>
            </Col>

<Col></Col>


            <Col>
              {qrcodeImage}

              <Col>
                <br></br>
                <p>
                  Please show this QR code at the theatre. This is your ticket
                  for the movie.
                </p>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
