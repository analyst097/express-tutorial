const app = require("express")();

/**
    Route path: /users/:userId/books/:bookId
    Request URL: http://localhost:3000/users/34/books/8989
    req.params: { "userId": "34", "bookId": "8989" }    
 */

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send("params:" + req.params.bookId + " " + req.params.userId);
});

/**
    Route path: /flights/:from-:to
    Request URL: http://localhost:3000/flights/LAX-SFO
    req.params: { "from": "LAX", "to": "SFO" }
 */

app.get("/flights/:from-:to", (req, res) => {
  res.send("params:" + req.params.from + "-" + req.params.to);
});

app.listen(3000);
