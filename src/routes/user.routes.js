const express = require("express");
const routes = express.Router();

const { GET_USER } = require("../controllers/user");
const { VERIFY_TOKEN } = require("../middlewares/verify.token");

module.exports = routes.get("/user", VERIFY_TOKEN, GET_USER);
