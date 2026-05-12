const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const SECRET = process.env.JWT_SECRET || 'lonestar_admin_secret_2024';

// Default admin credentials (in production use a real DB)
const ADMIN = { email: 'admin@lonestar.com', passwordHash: bcrypt.hashSync('Admin@123', 10) };

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email !== ADMIN.email) return res.status(401).json({ error: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, ADMIN.passwordHash);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ email }, SECRET, { expiresIn: '24h' });
  res.json({ token, email });
});
module.exports = router;
