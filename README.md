
# Slack Ingestion Module – Spur Hacks 2025

This module ingests messages from all **public Slack channels** in a workspace, using a custom Slack app + bot, and stores them in a local **SQLite database** (`slack.db`).

> Part of the SpurHacks 2025 project to analyze team communication using LLMs.

---

## What This Module Does

- Connects to a Slack workspace using a Bot Token
- Iterates through all **public channels**
- Joins channels if the bot isn't already a member
- Extracts recent messages from each channel
- Saves each message (with timestamp, user, channel) into `slack.db`

---

## Setup

### 1. Clone the repository and create a virtual environment

```bash
git checkout -b slack-ingestion
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Create a `.env` file in the root

```bash
SLACK_BOT_TOKEN=xoxb-your-token-here
```

> You get this token from your Slack App settings → OAuth & Permissions.

---

### 3. Run the DB setup (only once)

```bash
python db_setup.py
```

---

### 4. Ingest messages

```bash
python slack_ingest.py
```

This will fetch messages from all public channels the bot can access and populate `slack.db`.

---

## 🗃️ Schema: `messages` Table

| Column    | Description                       |
|-----------|-----------------------------------|
| `id`      | Unique message ID or timestamp    |
| `user`    | Slack user ID (e.g. `U09ABC123`)  |
| `text`    | Message content                   |
| `ts`      | UNIX timestamp (as string)        |
| `channel` | Channel ID (e.g. `C09XYZ123`)     |

---

## View Messages

To print the most recent messages:

```bash
python print_db.py
```

This will display the most recent messages with **readable timestamps**.

---

## Integration for Team

- Your teammates can use `slack.db` in their backend and extract messages
- They can query this data, summarize it using LLMs, or detect blockers
- The ingestion module is standalone, reusable, and venv-isolated

---

## Requirements

Python 3.7+  
Dependencies in `requirements.txt`:
- `slack_sdk`
- `python-dotenv`

---

## Questions?

Ping @Myra for help with token setup, bot permissions, or Slack access!
