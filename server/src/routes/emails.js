const express = require("express");
const router = express.Router();

// test route (important)
router.get("/", (req, res) => {
  res.send("Emails API is working");
});

module.exports = router;
