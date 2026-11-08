console.log("PORTFOLIO SERVER.JS IS RUNNING");
console.log("Server file:", __filename);

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

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json(contacts);
  } catch (error) {
    console.error("Failed to retrieve contacts:", error.message);

    res.status(500).json({
      message: "Unable to retrieve contacts",
    });
  }
});

app.post("/api/contacts", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = await Contact.create({
      name: name,
      email: email,
      message: message,
    });

    res.status(201).json(contact);
  } catch (error) {
    console.error("Contact creation failed:", error.message);

    res.status(500).json({
      message: "Failed to create contact",
    });
  }
});

const startServer = async () => {
  const PORT = process.env.PORT || 5000;
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    console.log("Registering contacts route...");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

startServer();
