import React from "react";
import "./singlepage.css";
import Singlepost from "../../SinglePost/Singlepost";
import Sidebar from "../../Sidebar/Sidebar.jsx";

export default function Singlepage() {
  return (
    <div className="singlePage">
      <Singlepost />
      <Sidebar />
    </div>
  );
}
