import React from 'react'
import CryptoList from '../CryptoList/'
import './coinlist.scss'

class CoinList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render(){
    return(
      <div>
    <CryptoList {...this.props}/> 
    </div>
    )
  }
}
export default CoinList