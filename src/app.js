const express = require("express");

const app = express(); // Creating instance of an express

app.use("/user", (req, res) => {
  res.send("HAHAHAHAHAHAHAHAHA");
});

// this will only handle the GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "D", lastName: "J" });
});

// this will only handle the POST call to /user
app.post("/user", (req, res) => {
  console.log("save data to the DB");
  res.send("data successfully saved to DB");
});

// this will only handle the DELETE call to /user
app.delete("/user", (req, res) => {
  res.send("data deleted from DB");
});

// this will match all the HTTP methods API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from server");
});

app.listen(7777, () => {
  console.log("7777");
});
