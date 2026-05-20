const UserModel = require("../models/userModel");

exports.getProfile = (req, res) => {
  try {
    const user = UserModel.findById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch profile" });
  }
};

exports.getAllUsers = (req, res) => {
  try {
    const users = UserModel.getAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
