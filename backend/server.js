const express = require("express");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const { connection } = require("./config/db");
// const { userModel } = require("./models/User");
const { userController } = require("./controllers/userController");
const { authentication } = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userController);

app.use(authentication);

app.get("/", (req, res) => {
  res.send("Hello world");
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
