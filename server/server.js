const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

startServer();
