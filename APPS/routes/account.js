const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/db");

// router.get("/reg", (req, res) => {
//   res.send("ADD user ej");
// });

router.post("/reg", (req, res) => {
  let newUser = new User({
    login: req.body.login,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    age: req.body.age,
  });

  User.addUser(newUser, (err, user) => {
    if (err) res.json({ success: false, msg: "User not added" });
    else res.json({ success: true, msg: "User added successfully" });
  });
});

router.post("/auth", (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  User.getUserByLogin(login, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({ success: false, msg: "Such user was not found" });

    User.comparePass(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 3600 * 24,
        });
        res.json({
          success: true,
          token: "JWT" + token,
          user: {
            id: user._id,
            login: user.login,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            age: user.age,
          },
        });
      } else
        return res.json({ success: false, msg: "Password does not match" });
    });
  });
});

router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("All users");
  }
);

module.exports = router;
