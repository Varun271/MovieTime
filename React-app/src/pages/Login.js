import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../components/css/profile.css";
import axios from 'axios';
import Header from "../components/Header";

export default class Login extends React.Component {
  
  //author : Rutika Patel
  checkLogin(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if((email === "") || (password === "") ){
      alert("Please fill out the details")
      return
    }

     axios({
        method : "POST",
        url : "http://localhost:5000/checkLogin",
        data : {'email': email,'password': password}
      }).then((response)=>{
        if(response.data.message == true)
        {
          window.location.href="/"
        }
        else if(response.data.message == false){
          alert("Invalid Password")
        }
        else{
          alert("Email Id is not registered")
        }
      })

    }

  render() {

    return (
      <div>
        <Header/>
      <div className="container">
        <div className="login-container">
          <form
            name="contactform"
            className="login-form"
            method = "POST">
            <br />
            <h1>LOGIN</h1>
            <br />
            <div className="form-group">
          
            <label for='email'>Email</label>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Email Address"
              required
              />
              <br/>

            <label for='password'> Password</label> 
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Password"
              required/>

              <br/>

                <label className="forgot-password">
                  <Link to="/forgotpassword" >Forgot Password?</Link>
                   <p> Not a Member ? <Link to="/profile">Register</Link> Here</p>
                </label>
                <br /><br />
                <Button
                  variant="primary"
                  type="submit"
                  id="submit"
                  value="submit"
                  onClick = {this.checkLogin}>
                  Login
                </Button>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}
