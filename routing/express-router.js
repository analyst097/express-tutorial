//express router

const express = require("express");
const router = express.Router();
const app = express();

router.use((req, res, next) => {
  console.log("time:", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("router.get");
});

router.get("/about", (req, res) => {
  res.send("about router");
});

app.use("/", router);

app.listen(3000);
