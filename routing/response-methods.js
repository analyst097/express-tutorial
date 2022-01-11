const app = require("express")();

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

app.listen(3000);
