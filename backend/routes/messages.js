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

// POST /messages/summarize - summarize messages with Gemini
router.post("/summarize", async (req, res) => {
  try {
    console.log("[Gemini] Request received at /messages/summarize");
    const { messages } = req.body;
    const fetch = require("node-fetch");
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey)
      return res.status(500).json({ error: "Gemini API key not set" });
    // Custom prompt for Gemini
    const prompt = `You are an expert startup advisor. Given the following Slack conversation, provide a concise, actionable summary with important details, insights, and recommendations that can help the startup grow, succeed, and adhere to deadlines. Do not use bullet points. Write in a clear, narrative style.

Conversation:
${messages.map((m) => m.text).join("\n")}`;
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );
    const geminiData = await geminiRes.json();
    console.log("[Gemini] API response:", JSON.stringify(geminiData, null, 2)); // Log Gemini response for debugging
    if (!geminiRes.ok) {
      // Also log the status code and request body for extra debugging
      console.error("[Gemini] API HTTP status:", geminiRes.status);
      console.error(
        "[Gemini] Request sent to Gemini:",
        JSON.stringify(
          {
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
            prompt,
            apiKey: apiKey ? "[set]" : "[missing]",
          },
          null,
          2
        )
      );
      return res
        .status(500)
        .json({ error: geminiData.error || "Gemini API error" });
    }
    res.json({
      summary:
        geminiData.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No summary available.",
    });
  } catch (err) {
    console.error("[Gemini] Uncaught error in /messages/summarize:", err);
    res.status(500).json({ error: "Failed to summarize" });
  }
});

module.exports = router;
