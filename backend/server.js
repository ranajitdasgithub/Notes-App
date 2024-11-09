const express = require("express");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const { connection } = require("./config/db");
const { userModel } = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  console.log(email, password, name);
  const user = new userModel({
    email,
    password: password,
    name,
  });
  try {
    await user.save();
    res.json({ msg: "Signup Successfully" });
  } catch (err) {
    console.log(err);
    res.send("Something went wrong, try later");
  }
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
  console.log(`Server started at ${PORT}`);
});
