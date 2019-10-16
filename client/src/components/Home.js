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
  componentWillMount = async () => {
    await this.coinCall()
  }

  coinCall = async () => {
    try {
      const data = await ApiData()
      this.setState({
        data:data
      })
      
    } catch (error) {
      throw error
    }
  }

  render() {
    console.log(this.state.data)
    // const coins = this.state.data.map(coin=>(
    //   <Coin coinId={coin.id}/>
    //   ))
    const coinsArray=Array.from(this.state.data)
    // console.log(coins)
    const coins = coinsArray.map(coin=>(
  <Coin coinId={coin.id}/>
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