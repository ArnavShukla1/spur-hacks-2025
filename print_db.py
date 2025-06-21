import sqlite3

def print_messages(limit=20):
    conn = sqlite3.connect("slack.db")
    c = conn.cursor()

    try:
        c.execute("SELECT user, text, ts, channel FROM messages ORDER BY ts DESC LIMIT ?", (limit,))
        rows = c.fetchall()

        if not rows:
            print("No messages found.")
            return

        print(f"\nShowing the latest {len(rows)} messages:\n")
        for user, text, ts, channel in rows:
            print(f"[Channel: {channel}] ({ts}) {user}: {text}\n")

    finally:
        conn.close()

if __name__ == "__main__":
    print_messages(20)  # Change the number to show more/less messages