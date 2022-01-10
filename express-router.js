//express router

const express = require("express");
const router = express.Router();

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

module.exports = router;
