const express = require("express");
const passport = require("passport");
const User = require("../models/User");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = new User({ email });
    await User.register(user, password);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

// LOGIN
router.post(
  "/login",
  passport.authenticate("local"),
  (req, res) => {
    res.json({
      success: true,
      message: "Login successful",
      user: req.user,
    });
  }
);

// LOGOUT
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.json({ success: true, message: "Logged out" });
  });
});

// CURRENT USER
router.get("/me", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ success: false });
  }

  res.json({
    success: true,
    user: req.user,
  });
});

module.exports = router;
