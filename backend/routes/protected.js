const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(403).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Middleware for Role-Based Access Control
const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
};

// Protected routes
router.get('/admin', authenticateJWT, authorizeRole(['Admin']), (req, res) => {
  res.send('Welcome Admin!');
});

router.get('/user', authenticateJWT, authorizeRole(['User', 'Admin', 'Moderator']), (req, res) => {
  res.send('Welcome User!');
});

module.exports = router;
