import express from "express";
import { Category } from "../models/category.js";
import { auth } from "../middleware/auth.js";

export const catRouter = express.Router();

catRouter.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (e) {
    res.status(500).send(e);
  }
});

catRouter.post("/categories", auth, async (req, res) => {
  const newCat = new Category(req.body);

  try {
    const cat = await newCat.save();
    res.status(201).send(cat);
  } catch (e) {
    res.status(500).send(e);
  }
});
