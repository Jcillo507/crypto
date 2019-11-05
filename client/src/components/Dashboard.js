import React from 'react'
import { showFaves, getProfile } from '../services/apiService'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      faves: { coins: [] },
      id: [],
      coins: [],
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
      const faves = await showFaves(this.props.user.id)
      console.log(faves)
      this.setState({
        faves: faves,
        id: this.props.user.id
      })
    } catch (error) {
      throw error
    }
  }


  render() {
    const { user } = this.props
    console.log(this.state.faves)
    const { coins } = this.state.faves

    const faveDisplay = coins.map(coin => (
      <div key={coin.id}>
        <p>{coin.name}</p>
      </div>))

    const name = (user.name !== undefined) ? user.name : ''
    return (

      <div>
        <h1>Dashboard</h1>
        <p>{`Welcome back ${name}`}</p>
        {faveDisplay}
      </div>
    )
  }
}

export default Dashboard