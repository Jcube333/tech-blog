import React from "react";
import "./posts.css";
import Post from "../Post/Post.jsx";

export default function posts({ posts }) {
  return (
    <div className="posts">
      {posts.length > 0 ? (
        posts.map((p) => <Post key={p._id} post={p} />)
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}
