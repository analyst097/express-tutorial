//Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle

const { response } = require("express");
const express = require("express");
const app = express();

var myLogger = (req, res, next) => {
  console.log("Logged");
  next();
};

var requestTime = (req, res, next) => {
  var date = new Date();
  req.requestTime = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  next();
};

//configurable middlewares
//If you need your middleware to be configurable, export a function which accepts an options object or other parameters, which, then returns the middleware implementation based on the input parameters.

var mw = (options) => {
  return (req, res, next) => {
    //implmentation...
    console.log("configured middlware");
    next();
  };
};

app.use(myLogger);
app.use(requestTime);
app.use(mw({ validated: true }));

app.get("/", (req, res) => {
  var responseText = "Hello World! <br>";
  responseText += "<small>Requested at:" + req.requestTime + "</small>";
  res.send(responseText);
});

//middleware functions

app.listen(3000);
