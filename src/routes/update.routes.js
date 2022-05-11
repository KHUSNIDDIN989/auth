const express = require("express");
const routes = express.Router();

const { UPDATE_GET, UPDATE_POST } = require("../controllers/update");

module.exports = routes.get("/update", UPDATE_GET).post("/update", UPDATE_POST);
