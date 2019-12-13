import React from 'react'
import CryptoList from '../CryptoList/'
import News from '../News'
import Footer from '../Footer/'
import './home.scss'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      path:[],
    }
  }
  render() {
    console.log(this.props, 'home')
    return (
      <div className='home-bs'>

        <div className='home-ctr'>
          <div className='coin-home-ctr'> 
          <CryptoList {...this.props} />
          </div>
          <div>
          <News />
          </div>
          {/* <Footer /> */}
        </div>
        </div>
    )
  }
}

export default Home