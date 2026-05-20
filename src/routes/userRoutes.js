const express = require("express");
const router = express.Router();
const { authenticate, authorizeAdmin } = require("../middleware/auth");
const userController = require("../controllers/userController");

router.get("/profile", authenticate, userController.getProfile);
router.get("/", authenticate, authorizeAdmin, userController.getAllUsers);

module.exports = router;
