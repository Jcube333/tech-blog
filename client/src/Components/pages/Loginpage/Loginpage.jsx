import React from "react";
import "./loginpage.css";
import { Link } from "react-router-dom";

export default function Loginpage() {
  return (
    <div class="loginPage">
      <h1 className="loginTitle">Login</h1>
      <form className="loginForm">
        <label for="loginMail">Email</label>
        <input
          id="loginMail"
          type="email"
          placeholder="Enter your Email..."
          className="loginInput"
        ></input>
        <label for="loginPass">Password</label>
        <input
          id="loginPass"
          type="password"
          placeholder="Enter your Password..."
          className="loginInput"
        ></input>

        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="btnLink" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
