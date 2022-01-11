const app = require("express")();
const router = require("express").Router();

//matches the route /about
router.get("/about", (req, res) => {
  res.send("/about");
});

//matches the route /random.text
router.get("/random.text", (req, res) => {
  res.send("/random text");
});

//matches the route /acd and /abcd
router.get("/ab?cd", (req, res) => {
  res.send("/ab?cd");
});

//matches the route /abcd, /abbcd, abbbcd and so on
router.get("/ab+cd", (req, res) => {
  res.send("/ab+cd");
});

//matches the route /abcd, /abacd, /abefcd ...
router.get("/ab*cd", (req, res) => {
  res.send("/ab*cd");
});

//matches the route /abe and /abcde
router.get("/ab(cd)?e", (req, res) => {
  res.send("/ab(cd)?e");
});

//matches any route with an 'a' in it
router.get(/a/, (req, res) => {
  res.send("/a/");
});

//matches the route ending with 'fly'
router.get(/.*fly$/, (req, res) => {
  res.send("/regex");
});

app.use("/", router);

app.listen(3000);
