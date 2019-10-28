import React from 'react'

import {CryptoNews} from '../services/newsAPI'

class News extends React.Component{
  constructor(props){
  super(props)
  this.state={
    data:[]
  }
  }
  componentDidMount = async ()=>{
    await this.newsCall()
  }
  newsCall = async ()=>{
    try {
      const data = await CryptoNews()
      this.setState({
        data: data
      })
    } catch (error) {
      throw error
    }
  }
  render(){
    const { data } = this.state
    const display = data.map(article => {
      return (
        <div>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <img src={article.originalImageUrl}/>
        </div>
      )
    })
    return(<div>{display}</div>)
  }
}

export default News