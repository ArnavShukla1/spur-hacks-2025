// Handles Slack event verification and message events
const messageController = require("./messageController");

const handleSlackEvent = async (event) => {
  console.log("Received Slack event:", event); // Log every event received
  // Ignore bot messages
  if (event.bot_id) return;
  if (event.type === "message" && event.text) {
    await messageController.saveMessage(event);
  }
};

module.exports = {
  handleSlackEvent,
};
