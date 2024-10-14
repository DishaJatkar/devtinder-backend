const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://dishajatkar:E7juHBskEEBUkcCJ@nodejs1.xx1bw.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
