const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'lonestar_admin_secret_2024';

module.exports = (req, res, next) => {
  // Temporarily bypass token check
  req.user = { id: 'admin_hardcoded', role: 'admin' };
  next();
};
