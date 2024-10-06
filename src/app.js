const express = require("express");

const app = express(); // Creating instance of an express

app.use("/test", (req, res) => {
  res.send("Hello from server");
});

app.use("/hello", (req, res) => {
  res.send("Hello hello hello");
});

app.listen(7777, () => {
  console.log("7777");
});
