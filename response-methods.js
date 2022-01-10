const router = require("express").Router();

router.get("/download.response", (req, res) => {
  console.log("download method");
  res.download("/users.txt");
  res.send();
});

router.get("/end.response", (req, res) => {
  res.send("Response end");
  res.end("end");
});

router.get("/json.response", (req, res) => {
  res.json({ msg: "json response" });
});

app.get("/redirect.response", (req, res) => {
  res.redirect("/");
});

router.get("/render.response", (req, res) => {
  res.send("no view engine to render");
});

router.get("/sendFile.response", (req, res) => {
  res.sendFile("C:/Users/Aditya/development/nodejs/express-routing/users.txt");
});

router.get("/status.response", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
