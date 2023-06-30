import React, { useContext, useRef } from "react";
import "./loginpage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../../context/Context";

export default function Loginpage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { error,isFetching, dispatch } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (e) {
      dispatch({ type: "LOGIN_FAIL" });
    }
  };

  return (
    <div className="loginPage">
      <h1 className="loginTitle">Login</h1>
      <form className="loginForm" onSubmit={submitHandler}>
        <label htmlFor="loginMail">Email</label>
        <input
          id="loginMail"
          type="email"
          placeholder="Enter your Email..."
          className="loginInput"
          ref={emailRef}
        ></input>
        <label htmlFor="loginPass">Password</label>
        <input
          id="loginPass"
          type="password"
          placeholder="Enter your Password..."
          className="loginInput"
          ref={passwordRef}
        ></input>
        <button type="submit" className="loginButton" disabled={isFetching}>
          {!isFetching && "Login"}
        </button>
      </form>
      {error && <p className="loginFail">"Invalid Login Credentials. Please try again"</p>}
      <button className="loginRegisterButton">
        <Link className="btnLink" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
