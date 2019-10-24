import React from 'react'
class CoinInfo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

   const { data } = this.props.location.state
   const { market_data } = this.props.location.state.data
   console.log(data)
   console.log(market_data)
    return (
      <div>
        <h1>{data.name}</h1>
        <p>Current price {market_data.current_price.usd}</p>
        <img src={data.image.large}/>
        <p>circulating supply:{market_data.circulating_supply}</p>
        <p>24h high: {market_data.high_24h.usd}</p>
        <p> 24 h low: {market_data.low_24h.usd}</p>
        <p> market cap : {market_data.market_cap_change_24h}</p>
        <p>market cap percentage change 24h: {market_data.market_cap_change_percentage_24h}</p>
        <p>Market cap rank : {market_data.market_cap_rank}</p>
        <p>price change 24h {market_data.price_change_24h}</p>
        <p>price change % 24H {market_data.price_change_percentage_24h}</p>
        <p>price change %7d {market_data.price_change_percentage_7d}</p>
        <p>price change % 14d {market_data.price_change_percentage_14d}</p>
        <p>price change % 30d {market_data.price_change_percentage_30d}</p>
        <p>price change % 60d {market_data.price_change_percentage_60d}</p>
        <p>price change % 200d {market_data.price_change_percentage_200d}</p>
        <p>price change % 1y {market_data.price_change_percentage_1y}</p>
      </div>
    )
  }
}

export default CoinInfo