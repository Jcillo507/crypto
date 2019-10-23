import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Coin from './Coin'
import CoinInfo from './CoinInfo'

import ApiData from '../services/coinAPI'

class CryptoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  componentDidMount = async () => {
    await this.coinCall()
  }

  coinCall = async () => {
    try {
      const data = await ApiData()
      this.setState({
        data: data
      })
      console.log(this.state)

    }
    catch (error) {
      throw error
    }
  }

  render() {
    const coinData = this.state
    console.log(this.state)
    const coinsArray = Array.from(this.state.data)
    const coins = coinsArray.map(coin => (
      <div><Link
      key={coin.id}
      to={{
        pathname: `/CoinInfo/${coin.id}`,
        state: { data: coin.id, }
      }}
      data={coin}
      >
        <Coin
          coinId={coin.name}
          price={coin.market_data.current_price.usd}
          image={coin.image.small}

        />

      </Link>

      </div>
    ))
    console.log(this.state)
    return (
      <div>
        <ul>{coins}</ul>
      </div>
    )
  }
}

export default CryptoList