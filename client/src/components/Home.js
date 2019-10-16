import React from 'react'
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
      console.log("******called*********")
      const data = await ApiData()
      this.setState({
        data
      })
      
    } catch (error) {
      throw error
    }
  }

  render() {
    console.log(this.state.data)

    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home