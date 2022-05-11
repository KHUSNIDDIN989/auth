const { read, write } = require("../utils/FS");

const UPDATE_GET = (_, res) => {
  res.render("update");
};

const UPDATE_POST = (req, res) => {
  const { username, password } = req.body;
  const data = read("users.json");

  const foundUser = data.find((e) => e.username == username);

  foundUser.password = password || foundUser.password;

  write("users.json", data);

  res.redirect("/update");
};

module.exports = {
  UPDATE_GET,
  UPDATE_POST,
};
