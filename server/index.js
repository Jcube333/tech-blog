import express from "express";
import "./src/db/db.js";
import { userRouter } from "./src/routers/users.js";
import { postRouter } from "./src/routers/posts.js";
import { catRouter } from "./src/routers/categories.js";
import multer from "multer";
import { auth } from "./src/middleware/auth.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use("/images",express.static(__dirname+"/images"))
app.use(userRouter);
app.use(postRouter);
app.use(catRouter);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload", auth, upload.single("file"), async (req, res) => {
  try{
  res.status(200).send("Image Uploaded");
  }catch(e)
  {
    res.send(e);
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log("App running on port " + port);
});
