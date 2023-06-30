import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlepost.css";
import tech from "./tech-2.jpg";
import axios from "axios";

export default function Singlepost() {
  const [post, setPost] = useState({});
  const [title,setTitle]=useState();
  const [desc,setDesc]=useState();
  const [updateMode, setUpdateMode]=useState(false);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const token=localStorage.getItem("jwtToken");
  

  useEffect(() => {
    const fetchSinglePost = async () => {
      const res = await axios.get(`/posts/${postId}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc)
    };
    fetchSinglePost();
  }, [postId]);

  const PF="http://localhost:3000/images/"

  const handleDelete=async()=>{
    try{
    await axios.delete("/posts/"+post._id,{
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      window.location.replace("/");
    }catch(e)
    {
      console.log(e);
    }
  }

 

  const handleSubmit=async()=>{
  try{
    await axios.patch("/posts/"+postId,{title,desc},{
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      setUpdateMode(false);
    }catch(e){
      console.log(e);
    }
   
  }

  return (
    <div className="singlePost">
      <img className="singleImg" src={PF+post.banner}></img>
   
      <div className="singlePostInfo">

        <div className="pseudo"></div>

        {updateMode?(<input type="text" className="singlePostTitleUpdate" value={title} autoFocus onChange={(e)=>setTitle(e.target.value)
        }></input>):(<h1 className="singlePostTitle">{title}</h1>)}
        {localStorage.getItem("userId")==post.author?._id&&
        (<div className="singelPostEdits">
          <i className="singlePostIcons fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(!updateMode)}></i>
          <i className="singlePostIcons fa-solid fa-trash-can" onClick={handleDelete}></i>
        </div>)}
        
      </div>
        

      <div className="singlePostInfo authTime">
        {post.author && (
          <span className="singlePostInfoItem">
            Author:
            {post.author._id && (
              <Link to={`/?author=${post.author._id}`} className="btnLink">
                <b>{post.author.username}</b>
              </Link>
            )}
          </span>
        )}
        <span className="singlePostInfoItem">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>

      {updateMode?(<textarea value={desc}className="singlePostDescUpdate" onChange={(e)=>setDesc(e.target.value)}></textarea>):( <p className="singlePostDesc">{desc}</p>)}

      {updateMode&&<button className="submitBtn" onClick={handleSubmit}>Update</button>}
     
    </div>
  );
}
