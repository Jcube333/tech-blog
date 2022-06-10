import React from "react";
import "./update.css";
import profileImg from "./Jaimin.jpeg";

export default function Update() {
  return (
    <div class="update">
      <div className="updateTitleContainer">
        <span className="title1">Update your Account</span>
        <span className="title2">Delete Account</span>
      </div>

      <form className="updateForm">
        <div className="updatePPContainer">
          <img src={profileImg} className="updateProfile"></img>
          <label for="updatePP">
            <i className="updateIcon fa-solid fa-user"></i>
          </label>
          <input type="file" style={{ display: "none" }}></input>
        </div>
        <label for="userName">Username</label>
        <input id="userName" type="text" placeholder="Jaimin"></input>
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="jaiminjagdish@gmail.com"
        ></input>
        <label for="password">Password</label>
        <input id="password" type="password"></input>

        <button type="submit" className="updateSubmit">
          Update
        </button>
      </form>
    </div>
  );
}
