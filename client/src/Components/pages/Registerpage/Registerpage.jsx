import React, { useState } from "react";
import "./registerpage.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Registerpage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setErr(false);
    try {
      const res = await axios.post("/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("jwtToken", res.data.token);
      console.log(localStorage);
      res.data.token && window.location.replace("/login");
    } catch (e) {
      setErr(true);
    }
  };

  return (
    <div className="registerPage">
      <h1 className="registerTitle">Register</h1>
      <form className="registerForm" onSubmit={submitHandler}>
        <label htmlFor="registerName">Name</label>
        <input
          id="registerName"
          type="text"
          placeholder="Enter your Name..."
          className="registerInput"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="registerMail">Email</label>
        <input
          id="registerMail"
          type="email"
          placeholder="Enter your Email..."
          className="registerInput"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label for="registerPass">Password</label>
        <input
          id="registerPass"
          type="password"
          placeholder="Enter your Password..."
          className="registerInput"
          onChange={(e) => setPassword(e.target.value)}
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

      {err && (
        <span style={{ color: "red" }}>Username/Email already in Use</span>
      )}
    </div>
  );
}
