import React from "react";
import "./post.css";
import postImg from "./Ai.jpg";
import { Link } from "react-router-dom";

export default function Post({ post })
 {

  const PF="http://localhost:3000/images/"
  return (
    <div className="post">
      <Link className="btnLink" to={`/post/${post._id}`}>
        <img src={PF + post.banner} className="postImg"></img>
        <div className="postInfo">
          <div className="postTags">
            {post.tags.map((tag, ind) => (
              <span key={ind}>{tag}</span>
            ))}
          </div>
          <span className="postTitle">{post.title}</span>
          <span className="postTime">
            {new Date(post.createdAt).toDateString()}
          </span>

          <hr className="separator"></hr>
          <span className="postDesc">{post.desc}</span>
        </div>
      </Link>
    </div>
  );
}
