const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  tokenVersion: { type: Number, default: 1 }, // bump this to invalidate all old tokens
}, { timestamps: true });

module.exports = mongoose.model("Admin", adminSchema);