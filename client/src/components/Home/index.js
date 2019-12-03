import React from 'react'
import './home.scss'
import CryptoList from '../CryptoList/'
import News from '../News'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  render() {
    return (
      <div className='home-bs'>
        <h1>CryptoNews</h1>
        <div className='home-ctr'>
          <div className='coin-home-ctr'> 
          <CryptoList {...this.props} />
          </div>
          <News />
        </div>
        </div>
    )
  }
}

export default Home