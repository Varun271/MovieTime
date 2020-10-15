import React from "react";
import { Container, Card, Col } from "react-bootstrap";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"
import Axios from "axios";
import "./css/UpComingCss.css"


export default class NowPlaying extends React.Component {

  constructor(props){
    super()
    this.state = {movieList:[],
    moreMovies:false}
  }

  async componentDidMount(){
    Axios({
      method : "GET",
      url : "http://localhost:5000/movie/getRunningMovies"
    }).then((response) =>{
      console.log(response)
      this.setState({movieList:response.data})
    })
  }

  handleSeeMore(){
    this.setState({moreMovies:true})
  }

  handleSeeLess(){
    this.setState({moreMovies:false})
  }

  render(){
    return(
      <div id="root1">
        <div className="row">
          <div className="col-md-6">
            <h3>Now Showing</h3>
          </div>
          <div className="col-md-6">
            {
              this.state.moreMovies?
              <button style={{float:"right"}} className="btn btn-outline-primary" onClick={this.handleSeeLess.bind(this)}>See Less</button>
              :
              <button style={{float:"right"}} className="btn btn-outline-primary" onClick={this.handleSeeMore.bind(this)}>See More</button>
            }
          </div>
        </div>
        <br/>

        {
          this.state.moreMovies?
          <div className="row">
           {
            this.state.movieList.map((movie, index)=>{
                return(
                    <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={movie.img} height="200px" width="100px" />
                      <Card.Body>
                        <Card.Title><Link to={"/movie/"+movie._id}>{movie.name}</Link></Card.Title>
                      </Card.Body>
                    </Card>
                    </div>
                 
                ) 
            })
            }
            </div>
          :
          <div className="row">
           {
            this.state.movieList.map((movie, index)=>{
                return(
                  index <=3 ?
                    <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={movie.img} height="200px" width="100px" />
                      <Card.Body>
                        <Card.Title><Link to={"/movie/"+movie._id}>{movie.name}</Link></Card.Title>
                      </Card.Body>
                    </Card>
                    </div>
                  :null
                ) 
            })
            }
            </div>
        }
      </div>
    )
  }
}
