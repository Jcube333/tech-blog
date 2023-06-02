import React from "react";
import "./registerpage.css";
import { Link } from "react-router-dom";

export default function Registerpage() {
  return (
    <div class="registerPage">
      <h1 className="registerTitle">Register</h1>
      <form className="registerForm">
        <label for="registerName">Name</label>
        <input
          id="registerName"
          type="text"
          placeholder="Enter your Name..."
          className="registerInput"
        ></input>
        <label for="registerMail">Email</label>
        <input
          id="registerMail"
          type="email"
          placeholder="Enter your Email..."
          className="registerInput"
        ></input>
        <label for="registerPass">Password</label>
        <input
          id="registerPass"
          type="password"
          placeholder="Enter your Password..."
          className="registerInput"
        ></input>

        <button type="submit" className="registerButton">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="btnLink" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
