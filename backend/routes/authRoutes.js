import {
  registerUser,
  login,
  getCurrentUser,
  logout
} from '../controller/authController.js';

import {
  registerUserOpts,
  loginOpts,
  getCurrentUserOpts,
  logoutOpts
} from '../schema/authSchema.js';

// Fastify ESM plugin: default export
export default function authRoutes(fastify, _opts, done) {
  fastify.post('/auth/registerUser', registerUserOpts, registerUser);
  fastify.post('/auth/login', loginOpts, login);
  fastify.get ('/auth/me', getCurrentUserOpts, getCurrentUser);
  fastify.post('/auth/logout', logoutOpts,  logout);
  done();
}

////////////////////////////////////////////////

import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const exists = await User.findOne({ username });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ username, password });
    res.json({ message: "Registered", user });
  } catch (err) {
    res.status(500).json({ message: "Error registering" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ message: "Login successful", token, user });
  } catch {
    res.status(500).json({ message: "Login error" });
  }
});

export default router;
