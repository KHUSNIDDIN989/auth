const express = require("express");
const router = express.Router();

const { GET_ADMIN } = require("../controllers/admin");
const { VERIFY_TOKEN } = require("../middlewares/verify.token");

module.exports = router.get("/admin", VERIFY_TOKEN, GET_ADMIN);
