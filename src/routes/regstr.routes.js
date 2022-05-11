const express = require("express");
const routes = express.Router();

const { regstrMeddleware } = require("../middlewares/regstr.middleware");
const { GET_REGSTR, POST_REGSTR } = require("../controllers/regstr");

module.exports = routes
  .get("/regstr", GET_REGSTR)
  .post("/regstr", regstrMeddleware, POST_REGSTR);
