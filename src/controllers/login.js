const { read, write } = require("../utils/FS");
const sign = require("../utils/jwt");

const GET_LOGIN = (req, res) => {
  res.render("login");
};
const POST_LOGIN = (req, res) => {
  const { username, password } = req.body;
  const data = read("users.json");

  const foundUser = data.find(
    (e) => e.username == username && e.password == password
  );

  if (foundUser.role == "admin") {
    res.cookie("token", sign({ id: foundUser.id, role: foundUser.role }), {
      maxAge: 30 * 1000,
    });
    res.redirect("/admin");
    return;
  }
  if (foundUser.role == "user") {
    res.cookie("token", sign({ id: foundUser.id, role: foundUser.role }), {
      maxAge: 30 * 1000,
    });
    res.redirect("/user");
    return;
  }

  if (res) {
  }
};
module.exports = {
  GET_LOGIN,
  POST_LOGIN,
};
