const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const { createClient } = require("redis");

const app = express();
const port = process.env.PORT || 9000;
// redis instance
const redisClient = createClient();
// redis error handling
redisClient.on("error", (err) => {
  console.log("Redis Client Error: " + err);
});
// redis ready
redisClient.on("ready", () => {
  console.log("Redis is ready");
});
// redis connect
redisClient.connect().then(() => {
  console.log("Redis connected");
});
// middleware
app.use(express.json());
app.use("/api", userRoutes);

// routes
app.get("/", (req, res) => res.send("API is running"));

// connect to db
mongoose
  .connect(process.env.MONGOBD_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.listen(port, () => console.log("Server running on port", port));
