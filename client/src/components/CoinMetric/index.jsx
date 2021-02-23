import React from "react";

const CoinMetric = (props) => {
  console.log(props);
  const { metrics } = props;
  const { data } = props;
  const { time } = props;
  // const graphValue = [];
 
  // const graph = ()=>{
  //   Array.from(time.values).map((value)=>{
  //     const test = value.splice(2, 3);
  //     console.log(test)
  //   })
  // }
  // graph();

  const metricDisplay = () => {
    return (
      <div className="coinMetric">
        <section className="coinMetric__wrapper--top">
                    <p className='info-datapts'>Current price: ${data.current_price.usd}</p>
            <p className='info-datapts'>Market Cap Rank : {data.market_cap_rank}</p>
            <p className='info-datapts'>Circulating Supply:{data.circulating_supply}</p>
            <p className='info-datapts'>24h High: {data.high_24h.usd}</p>
            <p className='info-datapts'>24h Low: {data.low_24h.usd}</p>
            <p className='info-datapts'>Market Cap Change 24H: {data.market_cap_change_24h}</p>
            <p className='info-datapts'>Market Cap % Change 24h: {data.market_cap_change_percentage_24h}</p>
            <p className='info-datapts'>Price Change 24H: {data.price_change_24h}</p>
            <p className='info-datapts'>Price Change  24H: {data.price_change_percentage_24h}%</p>
            <p className='info-datapts'>Price Change  7d: {data.price_change_percentage_7d}%</p>
            <p className='info-datapts'>Price Change  14d: {data.price_change_percentage_14d}%</p>
            <p className='info-datapts'>Price Change  30d: {data.price_change_percentage_30d}%</p>
            <p className='info-datapts'>Price Change  60d: {data.price_change_percentage_60d}%</p>
            <p className='info-datapts'>Price Change  200d: {data.price_change_percentage_200d}%</p>
            <p className='info-datapts'>Price Change  1y: {data.price_change_percentage_1y}%</p>
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
