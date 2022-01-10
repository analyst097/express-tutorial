const express = require("express");
const app = express();
const router = express.Router();

app.all("/", (req, res) => {
  console.log("route - /");
  res.send("/home route");
});

//Route Paths
//Route paths can be strings, string patterns, or regular expressions.

//matches the route /about
app.get("/about", (req, res) => {
  res.send("/about");
});

//matches the route /random.text
app.get("/random.text", (req, res) => {
  res.send("/random text");
});

//matches the route /acd and /abcd
app.get("/ab?cd", (req, res) => {
  res.send("/ab?cd");
});

//matches the route /abcd, /abbcd, abbbcd and so on
app.get("/ab+cd", (req, res) => {
  res.send("/ab+cd");
});

//matches the route /abcd, /abacd, /abefcd ...
app.get("/ab*cd", (req, res) => {
  res.send("/ab*cd");
});

//matches the route /abe and /abcde
app.get("/ab(cd)?e", (req, res) => {
  res.send("/ab(cd)?e");
});

//matches any route with an 'a' in it
app.get(/a/, (req, res) => {
  res.send("/a/");
});

//matches the route ending with 'fly'
app.get(/.*fly$/, (req, res) => {
  res.send("/regex");
});

//Route parameters
//Route parameters are named URL segments that are used to capture the values specified at their position in the URL.
//The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
//The name of route parameters must be made up of “word characters” ([A-Za-z0-9_]).

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

//array of callbacks
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

app.get("example/c", [cb0, cb1, cb2]);

//A combination of independent functions and arrays of functions can handle a route. For example:
app.get(
  "/example/d",
  (req, res, next) => {
    console.log("combination of callbacks");
    next();
  },
  [cb0, cb1, cb2]
);

//Response methods
app.get("/download.response", (req, res) => {
  console.log("download method");
  res.download("/users.txt");
  res.send();
});

app.get("/end.response", (req, res) => {
  res.send("Response end");
  res.end("end");
});

app.get("/json.response", (req, res) => {
  res.json({ msg: "json response" });
});

app.get("/redirect.response", (req, res) => {
  res.redirect("/");
});

app.get("/render.response", (req, res) => {
  res.send("no view engine to render");
});

app.get("/sendFile.response", (req, res) => {
  res.sendFile("C:/Users/Aditya/development/nodejs/express-routing/users.txt");
});

app.get("/status.response", (req, res) => {
  res.sendStatus(200);
});

app.listen("3000", () => {
  console.log("running..");
});
