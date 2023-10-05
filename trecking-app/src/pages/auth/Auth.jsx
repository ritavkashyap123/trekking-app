import React, { useState } from "react";

import { Password } from "primereact/password";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authService } from "../../features/auth/authService";
import { authActions } from "../../features/auth/authSlice";

import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./auth.scss";
import { useNavigate } from "react-router-dom";


function Auth() {
  const dispatch = useDispatch();

  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };
  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!fname.trim()) {
      validationErrors.fname = "Required";
    }
    if (!lname.trim()) {
      validationErrors.lname = "Required";
    }
    if (!phno.trim()) {
      validationErrors.phno = "Phone number is Required";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not Valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is Required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be more than 6 character";
    }
    if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Password not matched";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const dataToSend = {
        FirstName: fname,
        LastName: lname,
        phone_number: `${phno}`,
        email: email,
        password: password,
      };
      // console.log(dataToSend);

      const apiUrl = "http://192.168.1.37:8000/sign_up";
      axios
        .post(apiUrl, dataToSend)
        .then((response) => {
          // console.log("Data sent successfully:", response.data);
          alert(response.data.message);
        })
        .catch((error) => {
          // console.error("Error sending data:", error);
        });
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const user = await authService.login(email, password);
    dispatch(authActions.login(user));
    
    // const dataToLogin = {
    //   email: email,
    //   password: password,
    // };
    // const apiUrl = "http://192.168.1.37:8000/token";
    // axios
    // .post(apiUrl, dataToLogin)
    // .then((response) => {
    //   // console.log("Data sent successfully:", response.data);
    //   alert("Successfully Logged in");
    // })
    // .catch((error) => {
    //   // // console.error("Error sending data:", error);
    //   alert(error.response.data.detail)
    // });
  };

  return (
    <div className="auth">
      <div
        className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
      >
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
            </div>
          <span>or use your email for registration</span> */}
            <div className="name-main">
              <div className="fname">
                <input
                  type="text"
                  id="fname"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                />
                {errors.fname && <span className="errors">{errors.fname}</span>}
              </div>
              <div className="lname">
                <input
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}
                />
                {errors.lname && <span className="errors">{errors.lname}</span>}
              </div>
            </div>
            <div className="input-box">
              <input
                type="number"
                id="phno"
                placeholder="Phone No"
                value={phno}
                onChange={(e) => {
                  setPhno(e.target.value);
                }}
              />
              {errors.phno && <span className="errors">{errors.phno}</span>}
            </div>
            <div className="input-box">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {errors.email && <span className="errors">{errors.email}</span>}
            </div>
            <div className="input-box">
              <Password
                style={{ width: "100%" }}
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                weakLabel="Super Weak"
                mediumLabel="Medium"
                strongLabel="Strong"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {errors.password && (
                <span className="errors">{errors.password}</span>
              )}
            </div>
            <div className="input-box">
              <input
                type="password"
                id="authPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              {errors.confirmPassword && (
                <span className="errors">{errors.confirmPassword}</span>
              )}
            </div>
            <button style={{ marginTop: 10 }}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignin}>
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
            </div>
          <span>or use your account</span> */}
            <input
              type="email"
              id="signemail"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              id="signpassword"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <a href="#">Forgot your password?</a> */}
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
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
