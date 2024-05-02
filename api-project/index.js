const express = require("express");
const app = express();
const connect = require("./connection");
const User = require("./models/User");

connect();

app.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    //fe
    console.log("Server is running on 3000");
    //for github
  }
});
