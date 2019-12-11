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
    console.log(this.props)
    return(
      <div>
    <CryptoList /> 
    </div>
    )
  }
}
export default CoinList