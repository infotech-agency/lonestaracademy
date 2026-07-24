// const jwt = require('jsonwebtoken');
// const SECRET = process.env.JWT_SECRET || 'lonestar_admin_secret_2024';

// module.exports = (req, res, next) => {
//   // Temporarily bypass token check
//   req.user = { id: 'admin_hardcoded', role: 'admin' };
//   next();
// };

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = { id: decoded.adminId, role: "admin" };
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};