const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last name is required",
  },
  phone: {
    type: String,
    trim: true,
    required: "Phone is required",
  },
  gender: {
    type: String,
    trim: true,
    required: "Gender is required",
  },
  email: {
    type: String,
    trim: true,
    required: "Email is required",
  },
  password: {
    type: String,
    required: "Password is required",
    min: 6,
    max: 64,
  },
  age: {
    type: Number,
    trim: true,
    required: "Age is required",
  },
});

module.exports = mongoose.model("User", userSchema);
