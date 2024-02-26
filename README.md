
# Simple Express + MongoDB + Redis* REST API 

Base for init a REST API with Node tecnologies, (*REDIS IN PROCESS)



## Authors

- [@carlossierrafy24](https://github.com/carlossierrafy24)


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, Redis

**Database:** MongoDB

**Test:** Mocha, SuperTest, RapidAPI Client
## Usage/Examples

* src/models/user.js
```javascript
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  /*
  more attribs
  */
});

 module.exports = mongoose.model("User", userSchema);
```
* src/routes/user.js
```javascript
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

/*
more methods
*/

module.exports = router;
```

* Add user
```javascript
### add new user
POST http://localhost:9000/api/adduser HTTP/1.1
Content-Type: application/json

{
    "name": "Jhon",
    "lastName": "Doe",
    "phone": "3000000000",
    "gender": "M",
    "email": "jhondoe@gmail.com",
    "password": "123456",
    "age":  30
}
```
* Fetch users
```javascript
GET http://localhost:9000/api/getusers HTTP/1.1
Content-Type: application/json
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGOBD_URI`

