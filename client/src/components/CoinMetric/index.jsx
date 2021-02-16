import React from "react";

const CoinMetric = (props) => {
  const { metrics } = props;
  const metricDisplay = () => {
    return (
      <div>
        <p>All Time High :{metrics.all_time_high.price}</p>
        <p> Days Since all time High:{metrics.all_time_high.days_since}</p>
        <p>
          Active Addresses:
          {metrics.blockchain_stats_24_hours.count_of_active_addresses}
        </p>
        <p>
          Transactions in Last 24 hours:
          {metrics.blockchain_stats_24_hours.count_of_active_addresses}
        </p>
        <div>
          <h4>Lend Rates</h4>
          {Object.entries(metrics.lend_rates).map(([key, value], i) => {
            return (
              <p key={i}>
                {key} : {value}
              </p>
            );
          })}
        </div>
        <div className="">
          <p>mining algo: {metrics.mining_stats.mining_algo}</p>
          <p> Network Hash Rate{metrics.mining_stats.network_hash_rate}</p>
        </div>
        <div className="">
          <h4>Chain Data</h4>
          <p>Block Count:{metrics.on_chain_data.block_count}</p>
          <p>
            Average Block Size:{metrics.on_chain_data.block_size_bytes_average}
          </p>
          <p>Total Block Size:{metrics.on_chain_data.block_size_bytes_total}</p>
          <p>Hash Rate : {metrics.on_chain_data.hash_rate}</p>
          <p>Issuance Rate : {metrics.on_chain_data.issuance_rate}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <h2>Metrics</h2>
      <div>{metrics.all_time_high ? metricDisplay() : "loading"}</div>
    </>
  );
};

export default CoinMetric;
