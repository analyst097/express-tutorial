const app = require("express")();

/**
    Route path: /users/:userId/books/:bookId
    Request URL: http://localhost:3000/users/34/books/8989
    req.params: { "userId": "34", "bookId": "8989" }    
 */

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send("params:", req.params);
});

/**
    Route path: /flights/:from-:to
    Request URL: http://localhost:3000/flights/LAX-SFO
    req.params: { "from": "LAX", "to": "SFO" }
 */

app.get("/flights/:from-:to", (req, res) => {
  res.send("params:", req.params);
});

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

module.exports = app;
