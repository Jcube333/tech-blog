import express from "express";
import { Post } from "../models/post.js";
import { User } from "../models/user.js";
import { auth } from "../middleware/auth.js";
import {delImg} from  "../middleware/delImg.js";

export const postRouter = express.Router();

postRouter.post("/posts", auth, async (req, res) => {
  try {
    const post = new Post({
      ...req.body,
      author: req.user._id,
    });

    await post.save();
    res.status(201).send(post);
  } catch (e) {
    res.status(500).send(e);
  }
});

//GET/posts?cat=coding
//GET/posts?author=jcube
//GET/posts?cat=music

postRouter.get("/posts", async (req, res) => {
  const category = req.query.cat;
  const author = req.query.author;

  try {
    if (category) {
      const posts = await Post.find({
        tags: {
          $in: [category],
        },
      });

      if (posts.length === 0)
        return res.status(404).send("No post with mentioned category exists");
      return res.status(200).send(posts);
    }

    if (author) {
      const posts = await Post.find({ author });

      return res.status(200).send(posts);
    }

    const posts = await Post.find();

    return res.status(200).send(posts);
  } catch (e) {
    return res.status(404).send(e);
  }
});

postRouter.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    await post.populate("author");

  

    if (!post) return res.send("Invalid post ID");
    return res.send(post);
  } catch (e) {
    res.status(500).send(e);
  }
});

postRouter.patch("/posts/:id", auth, async (req, res) => {
  try {
    const updates = Object.keys(req.body);

    const post = await Post.findOne({
      _id: req.params.id,
      author: req.user._id,
    });

    if (!post) {
      return res.status(404).send();
    }

    updates.forEach((update) => {
      post[update] = req.body[update];
    });

    await post.save();
    return res.status(202).send(post);
  } catch (e) {
    return res.status(500).send(e);
  }
});

postRouter.delete("/posts/:id", auth, delImg, async (req, res) => {
  try {

    await req.post.deleteOne();

    return res.send("Deleted Successfully");
  } catch (e) {
    res.status(500).send(e);
  }
});
