const jwt = require("jsonwebtoken");

const VERIFY_TOKEN = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.redirect("/login");
  }

  jwt.verify(token, process.env.SCRET_KEY, (err, decode) => {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).redirect("/login");
    }

    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).redirect("/login");
    }

    req.data = decode;
  });

  next();
};

module.exports = {
  VERIFY_TOKEN,
};
