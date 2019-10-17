import React from 'react'

class CoinInfo extends React.Component{
  constructor(props){
  super(props)
  }
  render(){
    console.log(this.props)
    return(
      <div>
        <p>working</p>
      </div>
    )
  }
}

export default CoinInfo