// Handles DB operations for messages
const db = require("../db");

async function saveMessage(event) {
  const { channel, user, text, ts, thread_ts } = event;
  await db.query(
    `INSERT INTO messages (channel_id, user_id, text, ts, thread_ts) VALUES ($1, $2, $3, $4, $5)`,
    [channel, user, text, ts, thread_ts || null]
  );
}

async function getMessages(limit = 50) {
  const res = await db.query(
    `SELECT * FROM messages ORDER BY created_at DESC LIMIT $1`,
    [limit]
  );
  return res.rows;
}

module.exports = {
  saveMessage,
  getMessages,
};
