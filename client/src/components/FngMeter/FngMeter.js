import axios from "axios";
import { useEffect, useState } from "react";
import "./FngMeter.css";

const FngMeter = () => {
  const [fng, setFng] = useState();
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        "https://crypto-analytics2.herokuapp.com/realtime/fng"
      );
      setFng(response.data);
    };
    getData();
  }, []);

  return (
    <div className="fngMeter">
      <div className="fngTitle">
        <p className="mainTitle">Fear & Greed Index</p>
      </div>
      <div className="fngContainer">
        <div className="EG5"></div>
        <div
          className={fng?.value >= 95 && fng?.value < 100 ? "EG4On" : "EG4"}
        ></div>
        <div
          className={fng?.value >= 90 && fng?.value < 95 ? "EG3On" : "EG3"}
        ></div>
        <div
          className={fng?.value >= 85 && fng?.value < 90 ? "EG2On" : "EG2"}
        ></div>
        <div
          className={fng?.value >= 80 && fng?.value < 85 ? "EG1On" : "EG1"}
        ></div>
        <div
          className={fng?.value >= 75 && fng?.value < 80 ? "G5On" : "G5"}
        ></div>
        <div
          className={fng?.value >= 70 && fng?.value < 75 ? "G4On" : "G4"}
        ></div>
        <div
          className={fng?.value >= 65 && fng?.value < 70 ? "G3On" : "G3"}
        ></div>
        <div
          className={fng?.value >= 60 && fng?.value < 65 ? "G2On" : "G2"}
        ></div>
        <div
          className={fng?.value >= 55 && fng?.value < 60 ? "G1On" : "G1"}
        ></div>
        <div
          className={fng?.value >= 50 && fng?.value < 55 ? "N1On" : "N1"}
        ></div>
        <div
          className={fng?.value >= 45 && fng?.value < 50 ? "F5On" : "F5"}
        ></div>
        <div
          className={fng?.value >= 40 && fng?.value < 45 ? "F4On" : "F4"}
        ></div>
        <div
          className={fng?.value >= 35 && fng?.value < 40 ? "F3On" : "F3"}
        ></div>
        <div
          className={fng?.value >= 30 && fng?.value < 35 ? "F2On" : "F2"}
        ></div>
        <div
          className={fng?.value >= 25 && fng?.value < 30 ? "F1On" : "F1"}
        ></div>
        <div
          className={fng?.value >= 20 && fng?.value < 25 ? "EF5On" : "EF5"}
        ></div>
        <div
          className={fng?.value >= 15 && fng?.value < 20 ? "EF4On" : "EF4"}
        ></div>
        <div
          className={fng?.value >= 10 && fng?.value < 15 ? "EF3On" : "EF3"}
        ></div>
        <div
          className={fng?.value >= 5 && fng?.value < 10 ? "EF2On" : "EF2"}
        ></div>
        <div
          className={fng?.value >= 0 && fng?.value < 5 ? "EF1On" : "EF1"}
        ></div>
      </div>
      <div className="valueContainer">
        <span className="now">Now: </span>
        {fng?.value < 50 && (
          <span className="titleFear">{fng?.value_classification}</span>
        )}
        {fng?.value >= 50 && (
          <span className="titleGreed">{fng?.value_classification}</span>
        )}
        <p className="value">{fng?.value} / 100</p>
      </div>
    </div>
  );
};

export default FngMeter;
