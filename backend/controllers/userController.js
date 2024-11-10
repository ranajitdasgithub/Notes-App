const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { userModel } = require("../models/User");

const userController = Router();

// Signup route
userController.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  // Input validation
  if (!email || !password || !name) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const hash = await bcrypt.hash(password, 5);
    const user = new userModel({ email, password: hash, name });

    await user.save();
    res.json({ msg: "Signup Successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ msg: "Something went wrong, please try again later" });
  }
});

// Login route
userController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ msg: "Invalid credentials, please signup if you haven't" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({ msg: "Login successful", token });
    } else {
      res
        .status(401)
        .json({ msg: "Invalid credentials, please signup if you haven't" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ msg: "Something went wrong, please try again later" });
  }
});

module.exports = {
  userController,
};
