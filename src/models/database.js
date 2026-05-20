const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "../../data/auth.db");
let db;

function getDB() {
  if (!db) {
    const fs = require("fs");
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    db = new Database(dbPath);
    db.pragma("journal_mode = WAL");
  }
  return db;
}

function initDB() {
  const database = getDB();
  database.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'user' CHECK(role IN ('user', 'admin')),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log("Database initialized");
}

module.exports = { getDB, initDB };
