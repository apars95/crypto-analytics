import "./DashboardTable.css";

const DashboardTable = ({ coinData }) => {
  return (
    <div className="dashboardTable">
      <table>
        <thead>
          <tr className="tableHead">
            <th className="num">
              <p>#</p>
            </th>
            <th className="coin">
              <p>Coin</p>
            </th>
            <th className="price">
              <p>Price</p>
            </th>
            <th className="marketCap">
              <p>Market Cap</p>
            </th>
            <th className="totalVolume">
              <p>24h Volume</p>
            </th>
            <th className="dailyChange">
              <p>24h %</p>
            </th>
            <th className="circulatingSupply">
              <p>Circulating Supply</p>
            </th>
          </tr>
        </thead>
        {coinData?.map((element) => {
          return (
            <tbody key={element.market_cap_change_24h}>
              <tr>
                <td className="num">
                  <p className="num">{element.market_cap_rank}</p>
                </td>
                <td className="name">
                  <div className="nameDiv">
                    <img src={element.image} alt="" />
                    <p className="name">{element.name}</p>
                    <p className="symbol">{element.symbol.toUpperCase()}</p>
                  </div>
                </td>
                <td className="price">
                  <p className="price">
                    ${element.current_price.toLocaleString()}
                    {element.name === "Bitcoin" && ".00"}
                  </p>
                </td>
                <td className="marketCap">
                  <p className="marketCap">
                    ${element.market_cap.toLocaleString()}
                  </p>
                </td>
                <td className="totalVolume">
                  <p className="totalVolume">
                    ${element.total_volume.toLocaleString()}
                  </p>
                </td>
                <td className="dailyChange">
                  <p className="dailyChange">
                    <span
                      className={
                        element.price_change_percentage_24h > 0
                          ? "positiveReturn"
                          : "negativeReturn"
                      }
                    >
                      {element.price_change_percentage_24h}%
                    </span>
                  </p>
                </td>
                <td className="circulatingSupply">
                  <p className="circulatingSupply">
                    <div className="circulatingSupply">
                      {element.circulating_supply.toLocaleString()}
                      <p className="symbol">{element.symbol.toUpperCase()}</p>
                    </div>
                  </p>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default DashboardTable;
