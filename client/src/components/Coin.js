import React from 'react'

const Coin = (props) => {
  return (
  <div>
    <p><img src={props.image}/>{props.coinId} {props.price}</p>
  </div>
  )
}

export default Coin