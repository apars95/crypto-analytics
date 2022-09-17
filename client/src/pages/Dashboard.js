import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import DashboardTable from "../components/DashboardTale/DashboardTable";
const Dashboard = () => {
  const [coinData, setCoinData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://crypto-analytics2.herokuapp.com/marketdata"
      );
      let marketData = await response.data;
      setCoinData(marketData);
    };
    getData();
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-main">
        <h1>Top 100 Cryptocurrency Market Data</h1>
        <DashboardTable coinData={coinData} />
      </div>
    </div>
  );
};

export default Dashboard;
