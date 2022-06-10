import React from "react";
import "./Home.css";
import Header from "../../Header/Header.jsx";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
