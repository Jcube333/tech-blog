import React, { useContext, useEffect, useState } from "react";
import "./update.css";
import profileImg from "./Jaimin.jpeg";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Update() {
  const {user,dispatch}=useContext(Context)

  const _id = localStorage.getItem("userId");
  const profilePic= localStorage.getItem("profilePic");
  const profileLink = "http://localhost:3000/images/"+profilePic;
  const token = localStorage.getItem("jwtToken");
  const [file,setFile]=useState();

  
  const [username,setUsername]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [currUser,setCurrUser]=useState();

  useEffect(()=>{
    const Token=localStorage.getItem("jwtToken")
    const fetchUser=async()=>{
      try{
      const res=await axios.get("/me/"+_id);
      setCurrUser(res.data);
    }catch(e)
    {
      console.log(e);
    }
    }
      fetchUser();
  },[]);

 
   const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      password,
    };

    if(file)
    {
      const Data= new FormData();
      const FileName=Date.now()+file.name;
      Data.append("name", FileName)
      Data.append("file", file)
      newUser.profilePic=FileName
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
      const res = await axios.patch("/me", newUser, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
     
      //For maintaining consistency with the user state
      const updatedUser = {user:res.data,token};
      
      dispatch({type:"LOGIN_SUCCESS",payload:updatedUser});
      console.log(res.data);

      window.location.reload()

      alert("Successfully Updated the User");
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete=async()=>{

    try{
      await axios.delete("/me",{
       headers:{
         "Authorization": `Bearer ${token}`
       }
      });

      dispatch({type:"LOGOUT"});
    
    }catch(e)
    {
      alert("Unable to delete user");
    }
  }
 


  return (
    <div className="update">
      <div className="updateTitleContainer">
        <span className="title1">Update your Account</span>
        <span className="title2" onClick={handleDelete}>Delete Account</span>
      </div>

      <form className="updateForm" onSubmit={submitHandler}>
        <div className="updatePPContainer">
          <img src={file ? URL.createObjectURL(file):profileLink} className="updateProfile"></img>
          <label htmlFor="updatePP">
            <i className="updateIcon fa-solid fa-user"></i>
          </label>
          <input type="file" id="updatePP" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])}></input>
        </div>
        <label htmlFor="userName">Username</label>
        <input id="userName" type="text" placeholder={currUser?.username} onChange={(e)=>setUsername(e.target.value)}></input>
        <label htmlFor="email" >Email</label>
        <input
          id="email"
          type="email"
          placeholder={currUser?.email}
          onChange={(e)=>setEmail(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>

        <button type="submit" className="updateSubmit">
          Update
        </button>
      </form>
    </div>
  );
}
