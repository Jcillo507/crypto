import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Coin from './Coin'


class CoinInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  async componentDidMount() {
    console.log(this.props.match.params.id)
  }

  render() {
    // console.log("@@", this.state)
    console.log("!!", this.state.data)
    return (
      <div>

        <p>working</p>
      </div>
    )
  }
}
// const CoinInfo = (props) =>{
//   console.log("**********", props)
//   return(
//         <div>
//           working
//   <p>{props.name}</p>
//         </div >
//       )
// }
export default CoinInfo