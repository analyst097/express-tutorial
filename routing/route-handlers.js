const router = require("express").Router();

var cb0 = (req, res, next) => {
  console.log("first callback");
  next();
};

var cb1 = (req, res, next) => {
  console.log("third callback");
  next();
};

var cb2 = (req, res) => {
  console.log("third callback");
  res.send("array of callbacks");
};

router.get("example/c", [cb0, cb1, cb2]);

//A combination of independent functions and arrays of functions can handle a route. For example:
router.get(
  "/example/d",
  (req, res, next) => {
    console.log("combination of callbacks");
    next();
  },
  [cb0, cb1, cb2]
);

module.exports = router;
