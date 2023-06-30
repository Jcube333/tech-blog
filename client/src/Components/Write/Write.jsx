import React, { useContext, useState } from "react";
import "./write.css";
import writeImg from "./tech.jpg";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState(null);
  // const { user } = useContext(Context);
  const token=localStorage.getItem("jwtToken");
 
  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      desc,
      tags,
    };

    if(file)
    {
      const Data= new FormData();
      const FileName=Date.now()+file.name;
      Data.append("name", FileName)
      Data.append("file", file)
      newPost.banner=FileName
      try{
        await axios.post("/upload",Data,{
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      }catch(e){
        console.log(e)
      }
    }


    try {
      const res = await axios.post("/posts", newPost, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      
      console.log(res.data)

      window.location.replace("/post/"+res.data._id)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="write">
    {file &&
      <div className="writeImgContainer">
        <img className="writeImg" src={URL.createObjectURL(file)}></img>
      </div>}
      <form className="writeForm" onSubmit={submitHandler}>
        <div className="writeGrp">
          <label htmlFor="imgInput">
            <i className="addImg fa-solid fa-file-circle-plus"></i>
          </label>
          <input type="file" id="imgInput" style={{ display: "none" }} 
           onChange={(e)=>setFile(e.target.files[0])}></input>
          <input
            class="writeInput"
            type="text"
            placeholder="Title"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="writeGrp">
          <textarea
            class="writeText writeInput"
            placeholder="Tell your Story...."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <input
            className="writeInput"
            style={{ fontSize: 20 }}
            type="text"
            placeholder="Add Comma separated tags."
            
            onChange={(e) => setTags(e.target.value.split(","))}
          ></input>
        </div>

        <button type="submit" class="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
}
