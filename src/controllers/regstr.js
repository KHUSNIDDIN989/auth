const sign = require("../utils/jwt");

const { read, write } = require("../utils/FS");
const GET_REGSTR = (_, res) => {
  res.render("regstr");
};

const POST_REGSTR = (req, res) => {
  const { email, name, username, date, password, role } = req.body;

  const data = read("users.json");

  const foundUser = data.find((e) => e.role == role);

  data.push({
    id: data.length + 1,
    email,
    name,
    username,
    date,
    password,
    role: role.toLowerCase(),
  });

  write("users.json", data);
  res.cookie("token", sign({ id: foundUser.id, role: foundUser.role }));

  if (foundUser.role == "admin") {
    return res.redirect("/admin");
  }
  if (foundUser.role == "user") {
    return res.redirect("/user");
  }
};

module.exports = {
  GET_REGSTR,
  POST_REGSTR,
};
