require("dotenv").config();
const axios = require("axios");
const _ = require("lodash");
const getData = async (req, res, next) => {
  try {
    const marketData = [];
    const response = await axios.get(process.env.MARKET_API, {});
    const responseData = response.data;
    for (i = 0; i < 100; i++) {
      marketData.push(responseData[i]);
    }
    console.log(marketData);
    res.status(200).send(marketData);
  } catch (err) {
    res.status(500).send("Internal Server Error.");
  }
};

module.exports = getData;
