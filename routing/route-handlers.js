const app = require("express")();

var cb0 = (req, res, next) => {
  console.log("first callback");
  next();
};

var cb1 = (req, res, next) => {
  console.log("second callback");
  next();
};

var cb2 = (req, res) => {
  console.log("third callback");
  res.send("array of callbacks");
};

//Route handlers
//You can provide multiple callback functions that behave like middleware to handle a request.

//single callback
app.get("/example/a", (req, res) => {
  console.log("example/a");
  res.send("one callback");
});

//more than one callback
app.get(
  "/example/b",
  (req, res, next) => {
    console.log("/example/b");
    next();
  },
  (req, res) => {
    res.send("two callbacks");
  }
);

app.get("/example/c", [cb0, cb1, cb2]);

//A combination of independent functions and arrays of functions can handle a route. For example:
app.get(
  "/example/d",
  (req, res, next) => {
    console.log("combination of callbacks");
    next();
  },
  [cb0, cb1, cb2]
);

app.listen(3000);
