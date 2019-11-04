import React from 'react'
import { CoinNews, CoinReddit, CoinTweet } from '../services/newsAPI'
import { addCoin } from '../services/apiService'

class CoinInfo extends React.Component {
  constructor(props) {
    super(props)
    this.data = this.props.location.state.data
    this.userId=this.props.location.state.userId
    this.state={
      news:[],
      reds:[],
      tweets:[],
      userId: this.userId
    }
  }
  componentDidMount = async () =>{
    await this.coinCall()
    await this.redCall()
    await this.tweetCall()
  }

  coinCall = async()=>{
    try {
      const news = await CoinNews(this.data.id)
      this.setState({
        news: news
      })
      } catch (error) {
        throw error
      }  
  }
  redCall = async()=>{
    try {
      const reds = await CoinReddit(this.data.id)
      this.setState({
        reds:reds
      })
    } catch (error) {
      throw error();
    }
  }
  tweetCall = async()=>{
    try {
      const tweets = await CoinTweet(this.data.id)
      this.setState({
        tweets:tweets
      })
    } catch (error) {
      throw error
    }
  }
  handleFavorite = async e =>{
    e.preventDefault()
    const restObj = {
      name: this.data.name
    }
    try {
      const createdCoin = await addCoin(this.state.userId, restObj)
      return createdCoin
    } catch (error) {
      console.error(error)
    }
    console.log(restObj)
    console.log(this.state.userId)
    console.log(this.props)
  }
  render() {
  console.log(this.props)
   const { market_data } = this.props.location.state.data
   const { news } = this.state
   const { reds } = this.state
   const { tweets } = this.state
   const newsDisplay = news.map(news=>{
     return(
       <div>
         <h3>{news.title}</h3>
         <p>{news.description}</p>
         <img src={news.originalImageUrl}/>
         <a href={news.url}>Link to article</a>
       </div>
     )
   })
   const redsDisplay = reds.map(red=>{
     return (
       <div>
         <h3>{red.title}</h3>
         <a href={red.url}>Link to reddit</a>
       </div>
     )
   })
   const tweetDisplay = tweets.map(tweet=>{
     return(
       <div>
         <h4>{tweet.text}</h4>
         <a href={tweet.url}>Link To Tweet</a>
       </div>
     )
   })
    return (
      <div>
        <button onClick={this.handleFavorite}>like this coin</button>
        <h1>{this.data.name}</h1>
        <p>Current price {market_data.current_price.usd}</p>
        <img src={this.data.image.large}/>
        <p>circulating supply:{market_data.circulating_supply}</p>
        <p>24h high: {market_data.high_24h.usd}</p>
        <p> 24 h low: {market_data.low_24h.usd}</p>
        <p> market cap : {market_data.market_cap_change_24h}</p>
        <p>market cap percentage change 24h: {market_data.market_cap_change_percentage_24h}</p>
        <p>Market cap rank : {market_data.market_cap_rank}</p>
        <p>price change 24h {market_data.price_change_24h}</p>
        <p>price change % 24H {market_data.price_change_percentage_24h}</p>
        <p>price change %7d {market_data.price_change_percentage_7d}</p>
        <p>price change % 14d {market_data.price_change_percentage_14d}</p>
        <p>price change % 30d {market_data.price_change_percentage_30d}</p>
        <p>price change % 60d {market_data.price_change_percentage_60d}</p>
        <p>price change % 200d {market_data.price_change_percentage_200d}</p>
        <p>price change % 1y {market_data.price_change_percentage_1y}</p>
         <h1>Coin News</h1>
        {newsDisplay}
        <h1>Coin Reddits</h1>
        {redsDisplay}
        <h1>Coin tweets</h1>
        {tweetDisplay} 
      </div>
    )
  }
}

export default CoinInfo