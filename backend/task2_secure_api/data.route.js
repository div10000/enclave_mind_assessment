const express = require("express");
const router = express.Router();

// POST /api/data
router.post("/data", (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (!password || password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters" });
  }

  return res.status(200).json({ message: "Validation successful" });
});

module.exports = router;
