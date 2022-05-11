const jwt = require("jsonwebtoken");

module.exports = sign = (payload) =>
  jwt.sign(payload, process.env.SCRET_KEY, { expiresIn: 20 });
