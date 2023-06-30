import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import { auth } from "../middleware/auth.js";
import {delImg} from  "../middleware/delImg.js";

export const userRouter = express.Router();

//Registration
userRouter.post("/register", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const user = await newUser.save();

    const token = await user.generateAuthToken();

    res.status(201).send({ user, token });
  } catch (e) {
    res.status(500).send(e);
  }
});

//Login
userRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generateAuthToken();

    res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send({ e });
  }
});

userRouter.get("/me/:id",async(req,res)=>{
  try{
    const user= await User.findOne({_id:req.params.id});
    if(!user)
     return res.status(404).send("No such user exists");

    return res.send(user);
  }catch(e){
    return res.status(500).send(e);
  }
})

//Update User Credentials
userRouter.patch("/me", auth, async (req, res) => {
  try {
    const updates = Object.keys(req.body);

    updates.forEach((update) => (req.user[update] = req.body[update]));

    await req.user.save();

    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Delete a USer
userRouter.delete("/me", auth, delImg, async (req, res) => {
  try {
    await req.user.deleteOne();
    

    res.send(req.user);
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e });
  }
});
