const { read } = require("../utils/FS");

const LOGIN_MIDDLEWARE = (req, res, next) => {
  const { username, password } = req.body;

  const data = read("users.json");

  const foundUser = data.find(
    (e) => e.username == username && e.password == password
  );

  if (!foundUser) {
    res.redirect("/login");
  }
  next();
};

module.exports = {
  LOGIN_MIDDLEWARE,
};
