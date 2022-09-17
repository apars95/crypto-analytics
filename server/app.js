require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const _ = require("lodash");
const realtime = require("./routes/realtime");
const marketdata = require("./routes/marketdata");
const app = express();

/* Middlewares */
app.use(cors());
app.use("/realtime", realtime);
app.use("/marketdata", marketdata);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;
app.listen(PORT);
