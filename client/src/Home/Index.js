import React from 'react'
import CryptoList from '../components/CryptoList'
import News from '../components/News'

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
        <h1>CryptoNews</h1>
        <div className="home-ctr">
          <CryptoList {...this.props} />
          <News />
        </div></div>
    )
  }
}

export default Home