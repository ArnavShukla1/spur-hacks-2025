from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
import sqlite3
import os
from dotenv import load_dotenv

# Loading token from .env
load_dotenv()
SLACK_TOKEN = os.getenv("SLACK_BOT_TOKEN")

# Connect to Slack
client = WebClient(token=SLACK_TOKEN)

# Save a message to the database
def save_message(msg, channel_id):
    conn = sqlite3.connect('slack.db')
    c = conn.cursor()
    try:
        c.execute(
            '''INSERT OR IGNORE INTO messages (id, user, text, ts, channel)
               VALUES (?, ?, ?, ?, ?)''',
            (
                msg.get("client_msg_id", msg["ts"]),
                msg.get("user", "unknown"),
                msg.get("text", ""),
                msg.get("ts"),
                channel_id
            )
        )
        conn.commit()
    finally:
        conn.close()

def fetch_messages_with_pagination(channel_id):
    has_more = True
    cursor = None

    while has_more:
        if cursor:
            response = client.conversations_history(channel=channel_id, cursor=cursor)
        else:
            response = client.conversations_history(channel=channel_id)

        messages = response["messages"]
        for msg in messages:
            save_message(msg, channel_id)

        has_more = response.get("has_more", False)
        cursor = response.get("response_metadata", {}).get("next_cursor")
        
# Fetch messages from all public channels and store them
def fetch_all_channels():
    try:
        channels = client.conversations_list(types="public_channel")["channels"]

        for channel in channels:
            channel_id = channel["id"]
            channel_name = channel["name"]

            print(f"Fetching all messages from #{channel_name}...")

            try:
                client.conversations_join(channel=channel_id)  # Optional: if bot not already joined
                fetch_messages_with_pagination(channel_id)
                print(f"Finished fetching from #{channel_name}")

            except SlackApiError as e:
                print(f"Failed to fetch from #{channel_name}: {e.response['error']}")

    except SlackApiError as e:
        print("Failed to list channels:", e.response["error"])

# Run it
if __name__ == "__main__":
    fetch_all_channels()