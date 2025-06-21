CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  channel_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  text TEXT NOT NULL,
  ts TEXT NOT NULL,
  thread_ts TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  summary TEXT
);


