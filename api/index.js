import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/User.js";
import jwt from "jsonwebtoken";
import cors from "cors";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(4000, () => {
      console.log(`Server is running`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const createdUser = await User.create({ fullName, email, password });
    jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).status(201).json("Okay");
    });
  } catch (err) {
    if (err) throw err;
    res.status(500).json("error");
  }
});
