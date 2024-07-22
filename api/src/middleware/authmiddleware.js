const { isExpired, authenticate } = require("../functions");

// Middleware to ensure authentication before making requests
async function authMiddleware(req, res, next) {
  if (await isExpired()) {
    await authenticate();
  }
  next();
}

module.exports = authMiddleware;
