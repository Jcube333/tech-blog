import React from "react";
import "./post.css";
import postImg from "./Ai.jpg";
import { Link } from "react-router-dom";

export default function post() {
  return (
    <div className="post">
      <Link className="btnLink" to="/post/:postId">
        <img src={postImg} className="postImg"></img>
        <div className="postInfo">
          <div className="postTags">
            <span>AI</span>
            <span>ML</span>
          </div>
          <span className="postTitle">AI in modern World</span>
          <span class="postTime">1 hr ago</span>

          <hr className="separator"></hr>
          <span className="postDesc">
            Artificial intelligence (AI) makes it possible for machines to learn
            from experience, adjust to new inputs and perform human-like tasks.
            Most AI examples that you hear about today - from chess-playing
            computers to self-driving cars - rely heavily on deep learning and
            natural language processing.
          </span>
        </div>
      </Link>
    </div>
  );
}
