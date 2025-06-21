// Handles Slack event verification and message events
const messageController = require("./messageController");

const handleSlackEvent = async (event) => {
  // Ignore bot messages
  if (event.bot_id) return;
  if (event.type === "message" && event.text) {
    await messageController.saveMessage(event);
  }
};

module.exports = {
  handleSlackEvent,
};
