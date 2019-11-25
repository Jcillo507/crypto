import React from 'react'
import { CoinNews, CoinReddit, CoinTweet } from '../../services/newsAPI'
import { addCoin, getFaves, deleteCoin } from '../../services/apiService'
import './coininfo.scss'

class CoinInfo extends React.Component {
  constructor(props) {
    super(props)
    this.data = this.props.location.state.data
    this.userId = this.props.location.state.userId
    this.state = {
      news: [],
      reds: [],
      tweets: [],
      userId: this.userId,
      faves: { coins: [] },
      liked: false
    }
  }

  coinCall = async () => {
    try {
      const news = await CoinNews(this.data.id)
      this.setState({
        news: news
      })
    } catch (error) {
      throw error
    }
  }
  redCall = async () => {
    try {
      const reds = await CoinReddit(this.data.id)
      this.setState({
        reds: reds
      })
    } catch (error) {
      throw error();
    }
  }
  tweetCall = async () => {
    try {
      const tweets = await CoinTweet(this.data.id)
      this.setState({
        tweets: tweets
      })
    } catch (error) {
      throw error
    }
  }
  handleFavorite = async e => {
    e.preventDefault()
    const id = this.props.user.id
    const restObj = {
      name: this.data.name
    }
    console.log(this.data.name)

    try {
      const createdCoin = await addCoin(id, restObj)
      this.setState({ liked: true })
      console.log(createdCoin)
      return createdCoin
    } catch (error) {
      console.error(error)
    }
  }
  handleUnfavorite = async e => {
    e.preventDefault()
    const id = this.props.user.id
    console.log(this.data)
    const restObj = {
      name: this.data.name
    }
    this.setState({ liked: false })
    try {
      const deleteFavorite = await deleteCoin(id, restObj)
      return deleteFavorite
    } catch (error) {
      throw error
    }
  }
  showFaves = async () => {
    try {
      const faves = await getFaves(this.props.user.id)
      this.setState({ faves: faves })
      const like = () => {
        return this.state.faves.coins.filter(coin => coin.name === this.data.name)
      }
      const likedArray = Array.from(like())
      if (likedArray.length > 0) {
        this.setState({ liked: true })
      }

    } catch (error) {
      throw error
    }
  }

  componentDidMount = async () => {
    await this.coinCall()
    await this.redCall()
    await this.tweetCall()
    await this.showFaves()
  }
  render() {
    const { market_data } = this.props.location.state.data
    const { news } = this.state
    const { reds } = this.state
    const { tweets } = this.state
    const newsDisplay = news.map(news => {
      return (
        <div className='hover-ctr'>
          <a href={news.url}>
            <div className='info-news-ctr' key={news._id}>
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <img className='news-img' src={news.originalImageUrl} />
            </div>
          </a>
        </div>
      )
    })
    const redsDisplay = reds.map(red => {
      return (
        <div className='hover-ctr'>
        <div className='info-red-ctr' key={red._id}>
          <a href={red.url}>
            <h3>{red.title}</h3>
          </a>
        </div>
        </div>
      )
    })
    const tweetDisplay = tweets.map(tweet => {
      return (
        <div className='hover-ctr'>
          <a href={tweet.url}>
        <div className='info-tweet-ctr' key={tweet._id}>
          <h4>{tweet.text}</h4>

        </div>
          </a>
        </div>
      )
    })
    return (
      <div className='info-ctr'>
        <h1 className='coin-name'>{this.data.name}</h1>
        <div className='flex-ctr'>
          <div className='data-ctr'>
            {this.state.liked ? <button onClick={this.handleUnfavorite}>Unfollow</button> : <button onClick={this.handleFavorite}>like this coin</button>}
            <p>Current price: ${market_data.current_price.usd}</p>
            <img className='coin-logo'src={this.data.image.large} />
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
          </div>
          <div className='news-base-ctr full-scroll'>
            <h1 className='info-bx-header'>News</h1>
            {newsDisplay}
          </div>
          <div className='red-twt-ctr'>
          <div className='news-base-ctr half-scroll'>
            <h1 className='info-bx-header'>Reddits</h1>
            {redsDisplay}
          </div>
          <div className='news-base-ctr half-scroll'>
            <h1 className='info-bx-header'>Tweets</h1>
            {tweetDisplay}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinInfo