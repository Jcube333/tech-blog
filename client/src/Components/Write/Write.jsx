import React from "react";
import "./write.css";
import writeImg from "./tech.jpg";

export default function Write() {
  return (
    <div className="write">
      <div className="writeImgContainer">
        <img className="writeImg" src={writeImg}></img>
      </div>
      <form className="writeForm">
        <div className="writeGrp">
          <label for="imgInput">
            <i className="addImg fa-solid fa-file-circle-plus"></i>
          </label>
          <input type="file" id="imgInput" style={{ display: "none" }}></input>
          <input
            class="writeInput"
            type="text"
            placeholder="Title"
            autofocus={true}
          ></input>
        </div>
        <div className="writeGrp">
          <textarea
            class="writeText writeInput"
            placeholder="Tell your Story...."
          ></textarea>
        </div>

        <button type="submit" class="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
}
