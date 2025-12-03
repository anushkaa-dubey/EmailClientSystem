const express = require("express");
const router = express.Router();
const Email = require("../models/Email");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Middleware to verify token
function auth(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
}

// SEND EMAIL
router.post("/send", auth, async (req, res) => {
  try {
    const { to, subject, body } = req.body;

    const receiver = await User.findOne({ email: to });
    if (!receiver) return res.status(404).json({ msg: "Receiver not found" });

    const newEmail = new Email({
      from: req.user.id,
      to: receiver._id,
      subject,
      body,
    });

    await newEmail.save();
    res.json({ msg: "Email sent" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// INBOX
router.get("/inbox", auth, async (req, res) => {
  try {
    const emails = await Email.find({ to: req.user.id })
      .populate("from", "name email")
      .sort({ createdAt: -1 });

    res.json(emails);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// SENT MAILS
router.get("/sent", auth, async (req, res) => {
  try {
    const emails = await Email.find({ from: req.user.id })
      .populate("to", "name email")
      .sort({ createdAt: -1 });

    res.json(emails);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
