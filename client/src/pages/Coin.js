import FngMeter from "../components/FngMeter/FngMeter";
import Navbar from "../components/Navbar/Navbar";
import btcIcon from "../assets/btc.png";
import ethIcon from "../assets/eth.png";
import adaIcon from "../assets/ada.png";
import bnbIcon from "../assets/bnb.png";
import solIcon from "../assets/sol.png";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Coin = (props) => {
  const [price, setPrice] = useState();
  const [data, setData] = useState();
  const { coin } = useParams();

  useEffect(() => {
    const getPrice = async () => {
      try {
        let response = await axios.get(
          "https://crypto-analytics2.herokuapp.com/realtime/price/" + coin
        );
        setPrice(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    const interval = setInterval(() => {
      getPrice();
    }, 1000);
    getPrice();

    return () => clearInterval(interval);
  }, [coin]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(
          "https://crypto-analytics2.herokuapp.com/realtime/data/" + coin
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [coin]);

  return (
    <div className="bitcoinMain">
      <Navbar />
      <div className="bitcoinWrapper">
        <div className="bitcoinContent">
          <div className="fng">
            <FngMeter />
          </div>
          <div className="bitcoinPriceContainer">
            <div className="bitcoinHeader">
              <div className="bitcoinTitle">
                {coin === "btc" && <img src={btcIcon} alt="" />}
                {coin === "eth" && <img src={ethIcon} alt="" />}
                {coin === "bnb" && <img src={bnbIcon} alt="" />}
                {coin === "ada" && <img src={adaIcon} alt="" />}
                {coin === "sol" && <img src={solIcon} alt="" />}
                {coin === "btc" && <p>Bitcoin</p>}
                {coin === "eth" && <p>Ethereum</p>}
                {coin === "bnb" && <p>BNB</p>}
                {coin === "ada" && <p>Cardano</p>}
                {coin === "sol" && <p>Solana</p>}
              </div>
              <div className="bitcoinPrice">
                <p className="priceTag">{coin} Price</p>
                <p className="price">${price?.toLocaleString()}</p>
              </div>
            </div>
            <div className="bitcoinDataContainer">
              <div className="priceChange">
                <p className="title">
                  <span>24h</span> Price Change
                </p>
                <p
                  className={
                    data?.priceChangePercent > 0
                      ? "valuePositive"
                      : "valueNegative"
                  }
                >
                  {data?.priceChange}
                </p>
              </div>
              <hr />
              <div className="priceChangePercent">
                <p className="title">
                  <span>24h</span> Price Change %
                </p>
                <p
                  className={
                    data?.priceChangePercent > 0
                      ? "valuePositive"
                      : "valueNegative"
                  }
                >
                  {data?.priceChangePercent}%
                </p>
              </div>
              <hr />
              <div className="priceHigh">
                <p className="title">
                  <span>24h</span> High
                </p>
                <p className="value">
                  ${Number(data?.highPrice).toLocaleString()}
                </p>
              </div>
              <hr />
              <div className="priceLow">
                <p className="title">
                  <span>24h</span> Low
                </p>
                <p className="value">
                  ${Number(data?.lowPrice).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
