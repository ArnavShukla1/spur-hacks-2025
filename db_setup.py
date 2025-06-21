import sqlite3

conn = sqlite3.connect('slack.db')
c = conn.cursor()

c.execute('''
    CREATE TABLE IF NOT EXISTS messages (
        id TEXT PRIMARY KEY,
        user TEXT,
        text TEXT,
        ts TEXT,
        channel TEXT
    )
''')

conn.commit()
conn.close()
print("Database setup complete.")


