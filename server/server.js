const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const Contact = require("./models/Contact.js");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

app.post("/api/contacts", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(200).json(contact);
  } catch (error) {
    console.error("Contact creation failed:", error.message);

    res.status(500).json({
      message: "Failed to create contact",
    });
  }
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
