import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default class Movie extends React.Component {
 
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      id: props.match.params.id,
      name:"",
      date:"",
      language:"",
      genre:"",
      type:"",
      description:"",
      img:"",
      trailor:"",
      reviews : []
    };
    console.log("id  = ",this.state.id)
  }

  async componentDidMount() {
    axios({
      method : "Post",
      url : "http://localhost:5000/movie/getMovieById",
      data : {"_id":this.state.id}
    }).then((response) => {
        console.log("inside movie detail ",response)
        if(response){
          this.setState({
            name : response.data[0].name,
            date : response.data[0].date,
            language : response.data[0].language,
            genre: response.data[0].genre,
            type : response.data[0].type,
            description: response.data[0].description,
            img : response.data[0].img,
            trailor:response.data[0].trailor
          });
      }    
    })


    axios({
      method : "post",
      url : "http://localhost:5000/review/getReviews",
      data : {"movie_id" : this.state.id}
    }).then((response) => {
      this.setState({reviews :response.data})
    })
  } 


  submitReview(e){
    e.preventDefault()
    const review = document.getElementById('review').value;
    axios({
      method : "POST",
      url : "http://localhost:5000/review/addReview",
      data : {"review": review,"movie_id" : this.state.id}
    }).then((response) => {
      if(response.data.message === true){
        alert ("added successfull")
      }
      else if(response.data.message === false){
        alert("Some error occured")
      }
      else{

      }
    })
  }
  addList(e){
    e.preventDefault();
    axios({
      method : "POST",
      url : "http://localhost:5000/watchList/addList",
      data : {"movie_id": this.state.id}
    }).then((response) => {
      if(response.data.message === false){
        alert("Please login to add movie")
      }
      else if(response.data.message === true){
        alert("Movie added successfully")
      }
    })

  }

  render() {
    return (
      <div>
        <Header/>
      <Container>
        <Row>
          <Col>
            <Row xs={5} md={2}>
              <Image
                src={this.state.img}
                thumbnail
              />
            </Row>
            <Row xs={5} md={2}>
              <label>Movie: {this.state.name}</label>
            </Row>
            <Row xs={5} md={2}>
              <label>Language: {this.state.language}</label>
            </Row>
            <Row xs={5} md={2}>
              <label>Genre: {this.state.genre}</label>
            </Row>
            <Row xs={5} md={1}>
              <label>Release Date: {this.state.date}</label>
            </Row>
            <Row xs={5} md={2}>
              <Col><Button
                variant="primary"
                onClick={this.addList.bind(this)}>
                Add to Watch List
              </Button></Col>
              <Col>
              <Link to={"/book/"+this.state.id}>
                <Button variant="primary">Book Tickets</Button>
              </Link></Col>
              
            </Row>
          </Col>
          <Col>
            <iframe width="600" 
            height="400" 
            src={this.state.trailor}
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            {/* <iframe></iframe> */}
          </Col>
        </Row>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.description}</td>
            </tr>
            </tbody>
          </table>

          <h3>Reviews</h3>

          <table class="table table-striped">
            <thead>
            <tr>
              <th>Write a Review:</th>
              <th> 
                <form method="post">
                  <fieldset>
                    <textarea
                      className="form-control"
                      type="text"
                      id="review"
                      placeholder="Please write your review here"
                    />
                    </fieldset>
                    </form>
                    </th>
                    <th> <Button
                      variant="primary"
                      onClick = {this.submitReview.bind(this)}
                      id="submit"
                      value="submit" >
                      Submit
                    </Button></th>
            </tr>
          </thead>
          <tbody>
          {
                this.state.reviews.size <=0 ?
                <tr>Be the First one to add review</tr>
                :
                  this.state.reviews.map((r, index)=>{
                    return(
                      <tr>
                      <td>{r.email}</td>
                      <td>{r.review}</td>
                      </tr>
                    )
                    })
              }
          </tbody>
        </table>
      </Container>
      </div>
    );
  }
}
