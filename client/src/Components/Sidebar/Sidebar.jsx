import React, { useState, useEffect } from "react";
import "./sidebar.css";
import profile from "./Avatar.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get("/categories");

      setCat(res.data);
    };

    fetchCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <span className="sidebarTitle">ABOUT</span>
        <img className="sideImage" src={profile} alt="User Profile"></img>
        <p className="sidebarDesc">
          Hello, I'm Jaimin, A tech enthusiast who likes to write about the
          latest emerging technologies. My fields of expertise are AI and ML.
        </p>
      </div>
      <div className="sidebarContainer">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => {
            {
              return (
                c.name && (
                  <Link key={c._id} to={`/?cat=${c.name}`} className="btnLink">
                    <li className="sidebarListItems">{c.name}</li>
                  </Link>
                )
              );
            }
          })}
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
