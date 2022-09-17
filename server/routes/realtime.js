const express = require("express");
const router = express.Router();
const { getPrice, getData, getFNG } = require("../controllers/realtime");

router.get("/price/:coin", getPrice);
router.get("/data/:coin", getData);
router.get("/fng", getFNG);

module.exports = router;
