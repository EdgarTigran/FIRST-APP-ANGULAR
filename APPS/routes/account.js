const express = require("express");
const router = express.Router();
const Users = require("../models/user");
const config = require("../config/db");

// router.get("/reg", (req, res) => {
//   res.send("ADD user ej");
// });

router.post("/reg", (req, res) => {
  let newUser = new Users({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    age: req.body.age
  });

  Users.addUser(newUser, (err, user) => {
    if (err) res.json({ success: false, msg: "User not added" });
    else res.json({ success: true, msg: "User added successfully" });
  });
});

router.get("/all", (req, res) => {
  res.send("All users");
});

module.exports = router;
