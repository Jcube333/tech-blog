import express from "express";
import "./db/db.js";

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log("App running on port " + port);
});
