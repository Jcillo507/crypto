import React from 'react'
import { getFaves, getProfile } from '../../services/apiService'
import { Route, Link } from 'react-router-dom'
import CoinInfo from '../Coininfo/'
import ApiData from '../../services/coinAPI'


import './dashboard.scss'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      faves: { coins: [] },
      id: [],
      datas: [],
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
      console.log("called")
      const faves = await getFaves(this.props.user.id)
      const data = await ApiData()
      console.log(faves)
      this.setState({
        faves: faves,
        id: this.props.user.id,
        datas: data
      })
    } catch (error) {
      throw error
    }
  }

  render() {
    const { user } = this.props
    const { coins } = this.state.faves
    const { datas } = this.state
    const info = datas
    console.log(coins)
    console.log(this.state.datas)
    const faveFilter = datas.filter(async data => data.name == 'Bitcoin')
    console.log('datas', faveFilter)

    const faveFilter1 = coins.filter(async coin=> coin.name === await datas.name)
    console.log('coins', faveFilter1)
    // debugger;
    
    const filterFave = datas.filter(async (el)=>{
      return coins.some( (f) =>{
        return f.name===el.name
      })
    })
    console.log("filter faves", filterFave)
  

    const faveDisplay = coins.map(coin => (
      <div key={coin.id}>
        <Link
          to={{
            pathname: `/CoinInfo/${coin.name}`,
            // state: { data: , userId: this.props.userId }
          }}
        >
          {coin.name}</Link>
        <Route
          exact path={`/CoinInfo/:id`}
          exact render={(props) => <CoinInfo {...props} data={coin} user={user} />}
        />
      </div>))

    const name = (user.name !== undefined) ? user.name : ''
    return (

      <div className='dashboard-ctr'>
        <h1 >Dashboard</h1>
        <p>{`Welcome back ${name}`}</p>
        {faveDisplay}
      </div>
    )
  }
}

export default Dashboard