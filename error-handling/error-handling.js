//Error handling in Express 4.x
/**
 * Error Handling refers to how Express catches and processes errors that occur both synchronously and asynchronously.
 *  Express comes with a default error handler so you don’t need to write your own to get started.
 */

const app = require("express")();

app.get("/", (req, res) => {
  // try {
  //     throw new Error("Custom Error");
  // } catch (error) {
  //     console.log("error caught");
  //     res.send("error handled");
  // }
  next(new Error("Error"));
});

app.use((err, req, res, next) => {
  console.log("error logged");
  res.status(500);
  res.send("error");
});

app.listen(3000);
