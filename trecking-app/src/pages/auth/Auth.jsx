import React, { useState, useEffect } from "react";

import axios from "axios";

import "./auth.css";

function Auth() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };
  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phno, setPhno] = useState('');
  const [password, setPassword] = useState('');
  const [authPassword, setAuthPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      FirstName: fname,
      LastName: lname,
      phone_number: `${phno}`,
      email: email,
      password: password,
    };
    console.log(dataToSend)

    const apiUrl = "http://192.168.1.37:8000/sign_up"
    axios
      .post(apiUrl, dataToSend)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          {/* <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div> */}
          <span>or use your email for registration</span>
          <div className="name-main">
            <div className="fname">
              <input
                type="text"
                id="fname"
                placeholder="First Name"
                value={fname}
                onChange={(e)=>{setFName(e.target.value)}}
              />
            </div>
            <div className="lname">
              <input
                type="text"
                id="lname"
                placeholder="Last Name"
                value={lname}
                onChange={(e)=>{setLName(e.target.value)}}
              />
            </div>
          </div>
          <input
            type="number"
            id="phno"
            placeholder="Phone No"
            value={phno}
            onChange={(e)=>{setPhno(e.target.value)}}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <input
            type="password"
            id="authPassword"
            placeholder="Confirm Password"
            value={authPassword}
            onChange={(e)=>{setAuthPassword(e.target.value)}}
          />
          <button style={{ marginTop: 10 }}>Sign Up</button>
          {console.log()}
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          {/* <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div> */}
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="btn" id="signIn" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="btn" id="signUp" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
