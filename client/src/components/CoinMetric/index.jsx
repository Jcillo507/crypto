import React from "react";
import BarChart from './graph'

const CoinMetric = (props) => {
  const { metrics } = props;
  const { data } = props;
  const { time } = props;

  const metricDisplay = () => {
    return (
      <div className="coinMetric">
        <h4>Price Info</h4>
        <p>
          <b>Current price:</b> ${data.current_price.usd.toLocaleString()}
        </p>
        <p>
          <b>Market Cap Rank :</b> {data.market_cap_rank}
        </p>
        <p>
          <b>All Time High :</b>
          ${metrics.all_time_high.price.toLocaleString()}
        </p>
        <p>
          {" "}
          <b>Days Since all time High:</b>
          {metrics.all_time_high.days_since}
        </p>
        <p>
          <b>Circulating Supply:</b>
          {data.circulating_supply}
        </p>
        <p>
          <b>24h High:</b> ${data.high_24h.usd.toLocaleString()}
        </p>
        <p>
          <b>24h Low:</b> ${data.low_24h.usd.toLocaleString()}
        </p>
        <p>
          <b>Market Cap Change 24H:</b> {data.market_cap_change_24h}
        </p>
        <p>
          <b>Market Cap % Change 24h:</b>{" "}
          {data.market_cap_change_percentage_24h}
        </p>
        <p>
          <b>Price Change 24H:</b> {data.price_change_24h}
        </p>
        <p>
          <b>Price Change 24H:</b> {data.price_change_percentage_24h}%
        </p>
        <p>
          <b>Price Change 7d:</b> {data.price_change_percentage_7d}%
        </p>
        <p>
          <b>Price Change 14d:</b> {data.price_change_percentage_14d}%
        </p>
        <p>
          <b>Price Change 30d:</b> {data.price_change_percentage_30d}%
        </p>
        <p>
          <b>Price Change 60d:</b> {data.price_change_percentage_60d}%
        </p>
        <p>
          <b>Price Change 200d:</b> {data.price_change_percentage_200d}%
        </p>
        <p>
          <b>Price Change 1y:</b> {data.price_change_percentage_1y}%
        </p>
        <div className="coinMetric__ctrBtm">
          <div>
            <h4>Chain Data</h4>
            <p>
              <b>Mining Algorithm:</b> {metrics.mining_stats.mining_algo}
            </p>
            <p>
              <b>Average Block Size:</b>
              {metrics.on_chain_data.block_size_bytes_average.toFixed(4)}
            </p>
            <p>
              <b>Total Block Size:</b>
              {metrics.on_chain_data.block_size_bytes_total}
            </p>
            <p>
              <b>Hash Rate:</b> {metrics.on_chain_data.hash_rate}
            </p>
            <p>
              <b>Issuance Rate:</b> {metrics.on_chain_data.issuance_rate}
            </p>
          </div>
          <div>
            <h4>Lend Rates</h4>
            {Object.entries(metrics.lend_rates).map(([key, value], i) => {
              return (
                <p key={i}>
                  <b>{key}</b> : {value.toFixed(4)}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <h2>Metrics</h2>
      {/* <div>{metrics.all_time_high ? metricDisplay() : "loading"}</div> */}
      <BarChart data={time}/>
    </>
  );
};

export default CoinMetric;
