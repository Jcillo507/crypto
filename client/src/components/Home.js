import React from 'react'
import CryptoList from './CryptoList'
import CoinNews from '../services/newsAPI'
import { Link, Route, Switch } from 'react-router-dom'
import News from './News'


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
        {/* <CryptoList /> */}
        {/* <CoinNews/> */}
        <News />

      </div>
    )
  }
}

export default Home