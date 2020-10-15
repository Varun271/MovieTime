import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axios from "axios";
import NowPlaying from "../components/NowPlaying";
import UpComing from "../components/UpComing";
import { Button } from "react-bootstrap";
import "../components/css/home.css";
import Header from "../components/Header";
import MovieComponent from "../components/MovieComponent";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom"

export default class Home extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      date: new Date(),
      nowPlaying: [],
      upComing: [],
      movieList : [],
      filterMovies : false,
      filterShow: false,
    };
  }
  filter(e){
    this.setState({
      // filterShow : false,
      filterMovies : true
    })
    e.preventDefault();
    const genre = document.getElementById('genre').value;
    const language = document.getElementById('language').value;
    Axios({
      method : "POST",
      url : "http://localhost:5000/filter",
      data : {"genre" : genre, "language" : language}
    }).then((response) =>{
      this.setState({
        movieList : response.data
      })
    })
    
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="col mt-4" id="filter">
              <Button
                className="filter-button"
                variant="primary"
                onClick={() => this.setState({ filterShow: !this.state.filterShow })}>
                Filter
              </Button>
              {
                this.state.filterShow ? 
                <div  >
                  <div>
                  <label for="genre">Choose Genre</label>

                  <select name="genre" id="genre">
                    <option value="Adventure">Adventure</option>
                    <option value="Horror">Horror</option>
                    <option value="Drama">Drama</option>
                    <option value="Drama">Fantasy</option>
                    <option value="Sci-Fi">Fantasy</option>
                  </select>
                  </div>
                  <div> <label for="language">Choose Language</label>

                  <select name="language" id="language">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                  </div>
                  <button onClick={this.filter.bind(this)}>Apply</button>
                  </div>
                  :
                  null
              }
            </div>
            {
              this.state.filterMovies ? 
              <div>
                  { 
                  this.state.movieList.map((movie, index) => {
                    return(
                    
                        <div className="col-md-3">
                          <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={movie.img} height="200px" width="100px" />
                            <Card.Body>
                              <Card.Title>{movie.name}</Card.Title>
                            </Card.Body>
                          </Card>
                          </div>
                      )
                    })
                    }
                    </div>
              : 
                  <div>
                  <MovieComponent id="carousal"/>
                  <NowPlaying/>
                  <UpComing/>
                  </div>
            }
       
          </div>
    );
  }
}

