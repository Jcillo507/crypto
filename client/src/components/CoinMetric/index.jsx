import React from "react";

const CoinMetric = (props) => {
  const { metrics } = props;
  console.log(metrics);
  const metricDisplay = () => {
    return (
      <div className="coinMetric">
        <section className="coinMetric__wrapper--top">
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
        </section>
        <section className="coinMetric__wrapper--bottom">
          <div>
            <h4>Lend Rates</h4>
            {Object.entries(metrics.lend_rates).map(([key, value], i) => {
              return (
                <p key={i}>
                  {key} : {value.toFixed(4)}
                </p>
              );
            })}
          </div>
          <div className="">
            <h4>Chain Data</h4>
            <p>Mining Algorithm: {metrics.mining_stats.mining_algo}</p>
            <p>
              Average Block Size:
              {metrics.on_chain_data.block_size_bytes_average.toFixed(4)}
            </p>
            <p>
              Total Block Size:{metrics.on_chain_data.block_size_bytes_total}
            </p>
            <p>Hash Rate : {metrics.on_chain_data.hash_rate}</p>
            <p>Issuance Rate : {metrics.on_chain_data.issuance_rate}</p>
          </div>
        </section>
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
