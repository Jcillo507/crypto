import React from 'react'
import { Link } from 'react-router-dom'
// import Coin from './Coin'

import ApiData from '../services/coinAPI'

class CryptoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: []
    }
  }
  componentDidMount(){
    this.getData()
  }
  getData= async()=>{
    const data = await ApiData
    this.setState({
      data:data
    })
    console.log(this.state)
    
      return(
        <p>working</p>
      )
    

    // const coins = this.state.data.map(coin=>{
    
    // })
  }
}

export default CryptoList