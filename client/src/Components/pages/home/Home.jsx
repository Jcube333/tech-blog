import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../Header/Header.jsx";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts" + search);
        setPosts(res.data);
      } catch (e) {
        setPosts([]);
        console.log(e.response.data);
      }
    };

    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="homeContainer">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
