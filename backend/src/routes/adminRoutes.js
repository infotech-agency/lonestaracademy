const express = require("express");
const router = express.Router();
const { login, verify } = require("../controllers/adminAuthController");
const { requireAdminAuth } = require("../middleware/authMiddleware");

router.post("/login", login);
router.get("/verify", requireAdminAuth, verify);

module.exports = router;