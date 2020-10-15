import React from 'react';
import logo from './photos/logo.png';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {Row, Col} from 'react-bootstrap';
import './css/Booking.css';
const mapStyles = {
	width: '180px',
	height: '180px',
	marginLeft: '24px',
	marginTop: '15px'
  };

class Booking extends React.Component {

	render(){
		return (
			<div className="flexbox-container">
				<Row>
					<Col>
						<img src={logo} alt="movieposter"/>
					</Col>
					<Col>
						<div className="booking-details">
							<h4>Movie : {this.props.movieName}</h4>
							<p><b>Date : </b>{this.props.date}</p>
							<p><b>Time : </b> {this.props.time}</p>
							<p><b>Seats : </b> {this.props.seat}</p>
							<p><b>Theatre Name : </b>{this.props.theatreName}</p>
							<p><b>Transaction ID : </b> {this.props.transactionId}</p>
						</div>
					</Col>
					<Col>
						<div className="map">
							<Map
								google={this.props.google}
								zoom={14}
								style={mapStyles}
								initialCenter={{ lat: 44.635497458, lng: -63.58833098}}>
								<Marker position={{ lat: 44.635497458, lng: -63.58833098}} />
							</Map>
						</div>
					</Col>
				</Row>
      		</div>
     	);
 	}
  
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCHHazDxomKFsTi-j_BS_4DC7umHdPX0dU'
})(Booking);