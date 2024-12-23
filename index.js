const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = 'your-secret-key';

// Tạo token
function generateToken(user) {
  return jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
}

// Xác minh token
function verifyToken(token) {
  return jwt.verify(token, secretKey);
}
