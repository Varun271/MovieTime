import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import Axios from "axios";

//Author Rutika Patel : B00835088

export default class Header extends React.Component {
  
  isUserLoggedIn = false;
  constructor(props){
    super();
      this.state={
          show : true,
          movieList:[],
          searchedList:[]
      }
  }

  async componentDidMount() {
    Axios({
      method : "GET",
      url : "http://localhost:5000/currectUser"
    }).then((response)=>{
      if(response.data.message === false ){
        this.isUserLoggedIn = false;
        this.setState({
          show : true
        })
      }
      else{
        this.isUserLoggedIn = true;
        this.setState({
          show : false
        })
      }

    }); 

    Axios({
      method : "GET",
      url : "http://localhost:5000/movie/getAllMovies"
    }).then((response) =>{
      console.log("in header",response)
      this.setState({movieList:response.data})
    });
  }  
  

  async logout(){
    await Axios({
      method : "GET",
      url : "http://localhost:5000/logout"
    }).then((response)=>{
     console.log("inside logout function")
     window.location.href = "/"
  });
  
}

async login(){
  window.location.href = "/login"
}


handleSearch(e){
  const searchedString = e.target.value;
  var tempMovieList = []
  if(searchedString.length === 0 || searchedString === ''){
    tempMovieList = []
    this.setState({searchedList:tempMovieList})
  }

  this.state.movieList.map((movie,index)=>{
    if(movie.name.toLowerCase().includes(searchedString.toLowerCase()) && searchedString !=='' && searchedString!=='-'){
        tempMovieList.push(movie)
    }
    return tempMovieList
  })
  this.setState({searchedList:tempMovieList})

}

  render(){
      return(
        <div>
             <div className="flex-container">
                        <h1 className="title" id="MovieTime" style={{"margin-left": "40px","font-family": "cursive","margin-top": "30px"}}>Movie<label style={{"color":"red"}}>Time</label></h1>
                       <div className="col-sm-5 mt-5">
                       <input
                          className="form-control" style={{"margin-left":"20px"}}
                          type="text"
                          id="searchMovie"
                          onChange={this.handleSearch.bind(this)}
                          placeholder="Search Movie"
                        />
        
                      </div> 
                    <div className={"col-md-4 mt-5"}>
                      {
                        this.state.show ? 
                        <div  id="login">
                        <button className="btn btn-outline-primary" onClick={this.login}>Login</button>
                        </div>
                        : 
                        <div  id="logout">
                       <button className="btn btn-outline-primary" onClick={this.logout} >Logout</button>
                        </div>
 
                      }
                      </div>
                  </div>

                  <div id="zee">
                    {this.state.searchedList.map((movie,index)=>{
                     return(
                     <Link to={"/movie/"+movie._id}><p>{movie.name}</p></Link>
                     )
                    })}
                  </div>
                  <ul className="ul">
                  <li class="menu-link">
                    <Link to="/">Home</Link>
                  </li>
                    <li className="menu-link">
                      <Link to="/offers">Offers</Link>
                    </li>
        
                    <li className="menu-link">
                      <Link to="/contactus">Contact Us</Link>
                    </li>
                    {
                      this.state.show ? null : 
                      <li className="menu-link">
                      <Link to="/bookings">Bookings</Link>
                      </li>
                    }
                    {
                      this.state.show ? null : 
                      <li className="menu-link">
                      <Link to="/MyAccount">MyAccount</Link>
                     </li>
                    }
                  </ul>
        </div>
      ); 
    }
  }
