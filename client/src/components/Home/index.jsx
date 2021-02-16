import React from 'react'
import CryptoList from '../CryptoList/'
import News from '../News'
import Footer from '../Footer/'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      path:[],
    }
  }
  render() {
    return (
      <div className='home-bs'>
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