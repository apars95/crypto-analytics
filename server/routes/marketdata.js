const express = require("express");
const router = express.Router();
const getData = require("../controllers/marketdata");

router.get("/", getData);

module.exports = router;
