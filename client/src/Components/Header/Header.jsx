import React from "react";
import homeImg from "./Tech.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="smallTitle">Techs & Hacks for</span>
        <span className="bigTitle">Techies!</span>
      </div>
      <div className="imgContainer">
        <img className="homeImg" src={homeImg}></img>
      </div>
    </div>
  );
}
