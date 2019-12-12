import React from 'react'
import { Link } from 'react-router-dom'
import Coin from '../Coin/'
import './cryptolist.scss'


import ApiData from '../../services/coinAPI'

class CryptoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      className: 'ticker',

    }
  }
  componentDidMount = async () => {
    await this.coinCall()
    this.setClass()
    
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
  setClass = async(prevProps) => {
    console.log(this.props.location)
    // debugger;
    // if(prevProps !==prevProps){
    if ( await this.props.location.pathname === '/coinlist') {
      this.setState({
        className: 'non-ticker'
      })
    }
    else{
      this.setState({
        className:'ticker'
      })
    }}
    // else{
    //   this.setState({
    //     className:'ticker'
    //   })
    // }
  // }

  render() {
    console.log(this.props, '57')
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
      <div className='list-ctr'>
        <ul className={this.state.className}>{coins}</ul>
      </div>
    )
  }
}
 
export default CryptoList