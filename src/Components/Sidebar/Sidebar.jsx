import React from "react";
import "./sidebar.css";
import profile from "./Jaimin.jpeg";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <span className="sidebarTitle">ABOUT</span>
        <img className="sideImage" src={profile}></img>
        <p className="sidebarDesc">
          Hello, I'm Jaimin, A tech enthusiast who likes to write about the
          latest emerging technologies. My fields of expertise are AI and ML.
        </p>
      </div>
      <div className="sidebarContainer">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItems">Artificial Intelligence</li>
          <li className="sidebarListItems">Machine Learning</li>
          <li className="sidebarListItems">Embedded Systems</li>
          <li className="sidebarListItems">Cryptography</li>
          <li className="sidebarListItems">Cpp</li>
          <li className="sidebarListItems">App Development</li>
        </ul>
      </div>

      <div className="sidebarContainer">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sideIconsContainer">
          <i className="sideIcons fa-brands fa-twitter-square"></i>
          <i className="sideIcons fa-brands fa-facebook-square"></i>
          <i className="sideIcons fa-brands fa-pinterest-square"></i>
          <i className="sideIcons fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
