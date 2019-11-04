import React from 'react'
import { Link } from 'react-router-dom'
import Coin from './Coin'


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
    }
    catch (error) {
      throw error
    }
  }
  
  render() {
    console.log(this.props)
    const coinsArray = Array.from(this.state.data)
    const coins = coinsArray.map(coin => (
      <div><Link
      key={coin.id}
      to={{
        pathname: `/CoinInfo/${coin.id}`,
        state: { data: coin, userId: this.props.userId }
      }}
      data={coin}>
        <Coin
          coinId={coin.name}
          price={coin.market_data.current_price.usd}
          image={coin.image.small}
        />
      </Link>
      </div>
    )
    )
    return (
      <div>
        <ul>{coins}</ul>
      </div>
    )
  }
}

export default CryptoList