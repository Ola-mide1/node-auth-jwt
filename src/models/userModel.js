const { getDB } = require("./database");

class UserModel {
  static findByEmail(email) {
    return getDB().prepare("SELECT * FROM users WHERE email = ?").get(email);
  }

  static findByUsername(username) {
    return getDB().prepare("SELECT * FROM users WHERE username = ?").get(username);
  }

  static findById(id) {
    return getDB()
      .prepare("SELECT id, username, email, role, created_at FROM users WHERE id = ?")
      .get(id);
  }

  static create({ username, email, password, role = "user" }) {
    const result = getDB()
      .prepare("INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)")
      .run(username, email, password, role);
    return this.findById(result.lastInsertRowid);
  }

  static getAll() {
    return getDB()
      .prepare("SELECT id, username, email, role, created_at FROM users")
      .all();
  }
}

module.exports = UserModel;
