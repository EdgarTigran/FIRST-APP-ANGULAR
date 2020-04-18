const mongoose = require("mongoose");
const config = require("../config/db");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const User = (module.exports = mongoose.model("User", UserSchema));

module.exports.getUserByLogin = function (login, callback) {
  const query = { login: login };
  User.findOne(query, callback);
};

module.exports.getUserById = function (id, callback) {
  Users.findById(id, callback);
};

const saltRounds = 10;
const myPlaintextPassword = "newUser.password";

module.exports.addUser = function (newUser, callback) {
  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    if (err) throw err;
    newUser.password = hash;
    newUser.save(callback);
  });
};

module.exports.camparePass = function (passFromUser, useDBpass, callback) {
  bcrypt.compare(passFromUser, useDBpass, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
