import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'


class CoinInfo extends React.Component{
  constructor(props){
  super(props)
  this.state={
    data: props
  }
  }
  render(){
    console.log("**********",this.props)
    return(
      <div>
          <p>working</p>
        </div>
      )
    }
  }
// const CoinInfo = props =>{
//   console.log("**********",this.props)
//   return(
//         <div>
//   <p>working</p>
//         </div >
//       )
// }
export default CoinInfo