require("dotenv").config();
const express = require("express");
const cookeiPares = require("cookie-parser");
const path = require("path");

const routesLogin = require("./routes/login.routes");
const routesRegstr = require("./routes/regstr.routes");
const routesUser = require("./routes/user.routes");
const routesAdmin = require("./routes/admin.routes");
const routesUpdate = require("./routes/update.routes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(cookeiPares());
app.use(express.urlencoded({ extended: true }));

app.use(routesLogin);
app.use(routesRegstr);
app.use(routesUser);
app.use(routesAdmin);
app.use(routesUpdate);

app.use("/*", (_, res) => res.sendStatus(404));
app.listen(8999, console.log(8999));
