const express = require("express");
const connectDB = require("./config/database");
const app = express(); // Creating instance of an express
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Sachin",
    lastName: "Tedulkar",
    emailId: "sachin@tedulkar.com",
    password: "Sachin@123",
  };

  // Creating new instance of the user model
  const user = new User(userObj);
  try {
    await user.save();
    res.send("User added successfully!!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("success");
    app.listen(7777, () => {
      console.log("7777");
    });
  })
  .catch((err) => {
    console.error("db not connected");
  });
