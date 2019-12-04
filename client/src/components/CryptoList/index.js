import React from 'react'
import { Link } from 'react-router-dom'
import Coin from '../Coin/'
import './cryptolist.scss'


import ApiData from '../../services/coinAPI'

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
    const coinsArray = Array.from(this.state.data)
    const coins = coinsArray.map(coin => (
      <div key={coin.id}>
        <Link
          
          to={{
            pathname: `/CoinInfo/${coin.name}`,
            state: { data: coin, userId: this.props.userId }
          }}
          >
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
        <ul className='list-ctr'>{coins}</ul>
      </div>
    )
  }
}

export default CryptoList