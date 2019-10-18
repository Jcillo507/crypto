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

    } catch (error) {
      throw error
    }
  }

  render() {
    console.log(this.state.data)
    const coinsArray = Array.from(this.state.data)
    const coins = coinsArray.map(coin => (
      <Link
        key={coin.id}
        to={{
          pathname: '/CoinInfo',
          state: { data: this.state.data }
        }}
      >
        <Coin
          coinId={coin.name}
          price={coin.market_data.current_price.usd}
          image={coin.image.small}
        />
      </Link>
    ))
    return (
      <div>
        <ul>{coins}</ul>

        <Switch>
          {/* <Route>
           <CoinInfo />
         </Route> */}
          <Route
            path='/CoinInfo'
             exact component={(props) => <CoinInfo {...props} />}
          />
        </Switch>
      </div>
    )
  }
}

export default CryptoList