import React from "react";
import Axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

export default class MovieComponent extends React.Component{
    constructor(props){
        super()
        this.state = {movieList:[]}
      }
        async componentDidMount(){
        Axios({
        method : "GET",
        url : "http://localhost:5000/movie/getMovies"
        }).then((response) =>{
        this.setState({movieList:response.data})
        })
    }
      render(){
        return(
          <div>     
          {
            this.state.movieList.length>0?
            <div id="carousal">
            <Carousel>
            {
            this.state.movieList.map((movie, index)=>{
              return(
                  <Carousel.Item>
                    <Link to={"/movie/"+movie._id}>
                    <img
                      className="d-block w-100"
                      src={movie.img}
                      alt="First slide"
                      height = "500px"
                    /></Link>
                    <Carousel.Caption>
                      <h3 style={{color : "#FFFFFF"}}>{movie.name}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
              ) 
             })
            }
              </Carousel>
              </div>
            :null
          }
          </div>
        )  
    }
}