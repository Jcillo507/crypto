import React from 'react'

import CoinNews from '../services/newsAPI'

// const News = async () => {

//   const newsDisplay = await CoinNews.map(news => {
//     return <div><p>{news.title}</p></div>
//   })
//   return (<div>{newsDisplay}</div>)

// }
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
      const data = await CoinNews()
      this.setState({
        data: data
      })
    } catch (error) {
      throw error
    }
  }
  render(){
    const { data } = this.state
    // console.log(data)
    const display = data.map(article => {
      return (
        <div>{article.coins[0]._id}</div>
      )
    })
    return(<div>{display}</div>)
  }
}
//  News = async () => {

//     const newsDisplay = await CoinNews.map(news => {
//       return <div><p>{news.title}</p></div>
//     })
//     return (<div>{newsDisplay}</div>)

//   }

export default News