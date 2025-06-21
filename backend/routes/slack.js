const express = require("express");
const router = express.Router();
const { createEventAdapter } = require("@slack/events-api");
const slackController = require("../controllers/slackController");
require("dotenv").config();

const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET, {
  includeBody: true,
});

// Handle Slack URL verification challenge on a SEPARATE route BEFORE /events
router.post("/events/url_verification", express.json(), (req, res) => {
  if (req.body && req.body.type === "url_verification") {
    return res.status(200).send(req.body.challenge);
  }
  res.status(404).end();
});

// Slack event handling (NO body parser here!)
router.post("/events", slackEvents.requestListener());

slackEvents.on("message", async (event) => {
  try {
    await slackController.handleSlackEvent(event);
  } catch (err) {
    console.error("Error handling Slack event:", err);
  }
});

// Optional: log errors from the Slack event adapter
slackEvents.on('error', (error) => {
  console.error('Slack event error:', error);
});

module.exports = router;
