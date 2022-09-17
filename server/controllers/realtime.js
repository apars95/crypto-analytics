require("dotenv").config();
const axios = require("axios");
const _ = require("lodash");

const getPrice = async (req, res, next) => {
  try {
    const ticker = _.toUpper(req.params.coin) + "USD";
    const priceResponse = await axios.get(process.env.PRICE_API_BASE + ticker);
    let price = priceResponse.data.price;
    res.status(200).send(price);
  } catch (err) {
    res.status(500).send("Internal Server Error.");
  }
};

const getData = async (req, res, next) => {
  try {
    const ticker = _.toUpper(req.params.coin) + "USD";
    const dataResponse = await axios.get(process.env.MARKET_API_BASE + ticker);
    priceChange = dataResponse.data.priceChange.slice(0, -2);
    if (priceChange < 0) {
      priceChange =
        priceChange.substring(0, 1) +
        "$" +
        priceChange.substring(1, priceChange.length);
    } else {
      priceChange =
        priceChange.substring(0, 0) +
        "$" +
        priceChange.substring(0, priceChange.length);
    }
    let data = {
      priceChange: priceChange,
      priceChangePercent: dataResponse.data.priceChangePercent,
      highPrice: dataResponse.data.highPrice.slice(0, -2),
      lowPrice: dataResponse.data.lowPrice.slice(0, -2),
    };
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Internal Server Error.");
  }
};

const getFNG = async (req, res, next) => {
  try {
    let fng = { value: "", value_classification: "" };
    const fngResponse = await axios.get(process.env.FNG_API_BASE);
    fng.value = fngResponse.data.data[0].value;
    fng.value_classification = fngResponse.data.data[0].value_classification;
    res.status(200).send(fng);
  } catch (err) {
    res.status(500).send("Internal Server Error.");
  }
};

module.exports = {
  getPrice,
  getData,
  getFNG,
};
