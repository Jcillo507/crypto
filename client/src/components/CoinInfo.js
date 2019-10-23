import React from 'react'

class CoinInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
   const { data }= this.props.location.state
    return (
      <div>
        <p>Fuck Yeah<br></br>
        {this.props.location.state.data.id}
        </p>
      </div>
    )
  }
}

export default CoinInfo