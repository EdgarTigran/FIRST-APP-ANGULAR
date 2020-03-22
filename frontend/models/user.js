const mongoose = require("mongoose");
const config = require("../config/db");

const UsersSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const Users = (module.exports = mongoose.model("Users", UsersSchema));

module.exports.getUserById = function(id, callback) {
  Users.findById(id, callback);
};

module.exports.addUser = function(newUser, callback) {
  newUser.save(callback);
};
