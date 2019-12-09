import React from 'react'
import CryptoList from '../CryptoList/'
import News from '../News'
import Footer from '../Footer/'
import './home.scss'

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
        {/* <h1 className='home-title'>CryptoNews</h1> */}
        <div className='home-ctr'>
          <div className='coin-home-ctr'> 
          <CryptoList {...this.props} />
          </div>
          <div>
          <News />
          </div>
          <Footer />
        </div>
        </div>
    )
  }
}

export default Home