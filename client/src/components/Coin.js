import React from 'react'
import {Route} from "react-router-dom"

const Coin = (props) => {
  
  return (
    <div>
     <Route><p><img src={props.image} />{props.coinId} {props.price}</p></Route> 
    </div>
  )
}

export default Coin