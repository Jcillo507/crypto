import React from 'react'
import { getFaves, getProfile } from '../../services/apiService'
import { Link } from 'react-router-dom'
import ApiData from '../../services/coinAPI'
import Coin from '../Coin/'

import './dashboard.scss'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      faves: { coins: [] },
      id: [],
      data: [],
      faveCoins: [],
    }
  }
  componentDidMount = async () => {
    await this.favesCall()
    await getProfile()
  }
  componentDidUpdate = async (prevProps) => {
    if (this.props.user.id !== prevProps.user.id) {
      await this.favesCall()
    }
  }

  favesCall = async () => {
    try {
      const faves = await getFaves(this.props.user.id)
      const data = await ApiData()
      this.setState({
        faves: faves,
        id: this.props.user.id,
        data: data
      })

    } catch (error) {
      throw error
    }
  }

  render() {
    const { user } = this.props
    const { coins } = this.state.faves
    const { data } = this.state
    const filterFave = data.filter((el) => {
      return coins.some((f) => {
        return f.name === el.name
      })
    })
    
    const faveDisplay = filterFave.map(coin => (
      <div key={coin.id}>
        <Link
          to={{
            pathname: `/CoinInfo/${coin.name}`,
            state: { data: coin, userId: this.props.userId }
          }}>
          <Coin
            coinId={coin.name}
            price={coin.market_data.current_price.usd}
            image={coin.image.small}
          /><br></br>

        </Link>
      </div>
    )
    )

    const name = (user.name !== undefined) ? user.name : ''
    return (
      <div>
          <p className='db-title'>{`Welcome back ${name}`}</p>
      <div className='dashboard-ctr'>
        <div className='dashboard-text'>
          {/* <h1 className='db-title'>Dashboard</h1> */}
        </div>
        <div className='fave-display'>
          {faveDisplay}
        </div>
      </div>
      </div>
    )
  }
}

export default Dashboard