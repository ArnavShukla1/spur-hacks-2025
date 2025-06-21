require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const slackRoutes = require("./routes/slack");
const messagesRoutes = require("./routes/messages");

const app = express();
const PORT = process.env.PORT || 3001;

// Slack events endpoint (no body parser before this!)
app.use("/slack", slackRoutes);

// Only apply body parser to /messages
app.use("/messages", bodyParser.json(), messagesRoutes);

// Add body parser for any other future non-Slack JSON routes here

app.get("/", (req, res) => {
  res.send("Slack backend is running.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
