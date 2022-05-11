const express = require("express");
const routes = express.Router();

const { LOGIN_MIDDLEWARE } = require("../middlewares/login.middleware");
const { GET_LOGIN, POST_LOGIN } = require("../controllers/login");

module.exports = routes
  .get("/login", GET_LOGIN)
  .post("/login", LOGIN_MIDDLEWARE, POST_LOGIN);
