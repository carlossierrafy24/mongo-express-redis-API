const express = require("express");
const router = express.Router();

const userSchema = require("../models/user");

// define the create user route
router.post("/adduser", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// define the get all users route
router.get("/getusers", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// define the get user by id route
router.get("/getuser/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// update user by id route
router.put("/updateuser/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastName, phone, gender, age, email, password } = req.body;
  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          name,
          lastName,
          age,
          phone,
          gender,
          email,
          password,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// update user password by id route
router.put("/updatepass/:id", (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          password,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// delete user by id route
router.delete("/deleteuser/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
