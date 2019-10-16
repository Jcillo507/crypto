import React from 'react'
import Coin from './Coin'
import ApiData from '../services/coinAPI'

class Home extends React.Component {
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

    } catch (error) {
      throw error
    }
  }

  render() {
    console.log(this.state.data)
    const coinsArray = Array.from(this.state.data)
    const coins = coinsArray.map(coin => (
      <Coin 
      key={coin.id}
        coinId={coin.name}
        price={coin.market_data.current_price.usd}
        image={coin.image.small}
      />
    ))
    return (
      <div>
        <h1>Home</h1>
        <ul>{coins}</ul>
      </div>
    )
  }
}

export default Home