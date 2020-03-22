const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const config = require("./config/db");
const Users = require("./models/user");
const account = require("./routes/account");

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("We connected whit MongoDB");
});

mongoose.connection.on("error", err => {
  console.log("MongoDB connection error:" + err);
});

app.get("/", (req, res) => {
  res.send("Home");
  // Users.find()
  //   .then(users => res.send(users))
  //   .catch(err => res.send(err));
  // Users.create({
  //   firstname: "Edgar",
  //   lastname: "Davtyan",
  //   email: "test@test.bu",
  //   age: "38"
  // })
  // .then(user => res.send(user))
  // .catch(err => res.send(err));
});

app.use("/account", account);

app.listen(port, () => {
  console.log("The server is running on the port:" + port);
});
