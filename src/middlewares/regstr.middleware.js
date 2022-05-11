const regstrMeddleware = (req, res, next) => {
  const { email, name, username, password } = req.body;

  if (!email || !name || !username || !password) {
    return res.redirect("/regstr");
  }
  next();
};

module.exports = { regstrMeddleware };
