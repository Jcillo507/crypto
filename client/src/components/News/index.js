import React from 'react'
import './news.scss'

import {CryptoNews} from '../../services/newsAPI'

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
        <div  key={article._id} className="news-ctr">
          <a href={article.url} className='news-title'><h3>{article.title}</h3></a>
          <p className="news-desc">{article.description}</p>
          <img className="news-img" src={article.originalImageUrl}/>
          
        </div>
      )
    })
    return(<div className='news-bs-ctr'>{display}</div>)
  }
}

export default News