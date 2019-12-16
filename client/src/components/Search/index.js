import React from 'react'
import './search.scss'
import Coin from '../Coin'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }
  render() {
    // let { list } = this.props
    // let coinFilter = list.map( ({id}) =>id)
      
    // console.log('coinFilter', list)
    // console.log(this.props,"search")
    return (
      <div>
        <p className='base'>hello</p>
      </div>
    )
  }
}

export default Search