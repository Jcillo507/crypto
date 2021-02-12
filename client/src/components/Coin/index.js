
import React from 'react'
import { Route } from 'react-router-dom'

const Coin = (props) => {

  return (
    <div className='coin-bs'>
      <Route>
        <div className="coin-ctr">
          <img className='coin-img' src={props.image} />
          <div className='coin-data-ctr'>
            <p className='coin-data'>{props.coinId} </p>
            <p className='coin-data'>{props.price}</p>
          </div>
        </div>
      </Route>
    </div>
  )
}

export default Coin