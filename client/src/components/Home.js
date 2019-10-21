import React from 'react'
import CryptoList from './CryptoList'
import CoinInfo from './CoinInfo'
import { Link, Route, Switch } from 'react-router-dom'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  render() {
    
    return (
      <div>
        <h1>Home</h1>
        <CryptoList />
      </div>
    )
  }
}

export default Home