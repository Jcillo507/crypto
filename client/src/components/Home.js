import React from 'react'
import CryptoList from './CryptoList'
import News from './News'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  render() {
  console.log(this.props)
    return (<div>
        <h1>Home</h1>
        <div className= "home-ctr"> 
        <CryptoList {...this.props}/>
        {/* <CoinNews/> */}
        <News />
      </div></div>
    )
  }
}

export default Home