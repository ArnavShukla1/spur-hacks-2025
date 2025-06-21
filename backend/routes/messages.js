const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

// GET /messages - fetch recent messages
router.get("/", async (req, res) => {
  try {
    const messages = await messageController.getMessages();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

module.exports = router;
