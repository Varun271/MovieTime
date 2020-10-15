import React from "react";
import {Link, Redirect} from "react-router-dom";
import { Button } from "react-bootstrap";
import "../components/css/profile.css";
import axios from 'axios';
import Header from "../components/Header";

export default class Profile extends React.Component {

    //author : Rutika Patel
    addUsers(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const emailValidator = require('email-validator');
    const phone = document.getElementById('phone').value;

    if((name === "") || (email === "") || (password === "") || (confirmPassword==="") || (phone <= 0))
    {
      alert("Please fill out the details")
      return
    }

    if(!emailValidator.validate(email)){
      alert("Please enter valid email id")
      return
    }

    if(password !== confirmPassword){
      alert("Passwords do not match")
      document.getElementById('password').focus()
      return 
      }

        axios({
        method : "POST",
        url : "http://localhost:5000/user",
        data : {'name': name,'email': email,'password': password,'phone':phone}
      }).then((response)=>{
        if(response.data.message==true)
        {
          window.location.href="/login"
        }
        else{
          alert("User already exists with the entered email")
        }
      })
    }
  
  render() {
    return (
      <div>
        <Header isUserLoggedIn="true"/>
      <div className="container-fluid" id="root">
        <center><div className="register-container">
          <form className="register-form" method={'POST'}>
            <div id="register">
              <h1>REGISTER</h1>
            </div>
            <div className="form-group">
              <label for='name'>Name</label>

              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Name"
                required
                />

                <br/>
              <label for='email'>Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Email Address"
                required
                />
                <br/>

              <label for='password'>
                Password</label> 
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="Password"
                required
                />
                <br/>
              <label for='passconfirmPassword'> Confirm Password</label>
              <input  
              className="form-control" 
              type="password" 
              id="confirmPassword" 
              placeholder="Confirm Password"
              required={true}
              />
              <br/>
              <label for='phone'> Phone Number</label>
              <input  
              className="form-control" 
              type="number" 
              id="phone" 
              placeholder="Enter Your Phone Number"
              min={0}
              required={true}
              />
              <br />
               <label className="forgot-password">
                 <p > Already a Member ? <Link to="/login">Login</Link> Here</p>
                </label>
              <Button
                variant="primary"
                type="submit"
                id="submit"
                value="submit"
                onClick ={this.addUsers} >
                Register
              </Button>
            </div>
          </form>
        </div>
        </center>
      </div>
      
      </div>
    );
  }
}
