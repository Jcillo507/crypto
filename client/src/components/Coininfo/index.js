import React from 'react'
// import { CoinNews, CoinReddit, CoinTweet } from '../../services/newsAPI'
import { addCoin, getFaves, deleteCoin } from '../../services/apiService'

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

  // coinCall = async () => {
  //   try {
  //     const news = await CoinNews(this.data.id)
  //     this.setState({
  //       news: news
  //     })
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // redCall = async () => {
  //   try {
  //     const reds = await CoinReddit(this.data.id)
  //     this.setState({
  //       reds: reds
  //     })
  //   } catch (error) {
  //     throw error();
  //   }
  // }

  // tweetCall = async () => {
  //   try {
  //     const tweets = await CoinTweet(this.data.id)
  //     this.setState({
  //       tweets: tweets
  //     })
  //   } catch (error) {
  //     throw error
  //   }
  // }

  handleFavorite = async e => {
    e.preventDefault()
    const id = this.props.user.id
    const restObj = {
      name: this.data.name
    }
    try {
      const createdCoin = await addCoin(id, restObj)
      this.setState({ liked: true })
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
    } 
      catch (error) {
      throw error
    }
  }

  componentDidMount = async () => {
    // await this.coinCall()
    // await this.redCall()
    // await this.tweetCall()
    await this.showFaves()
  }

  render() {
    const { market_data } = this.props.location.state.data
    const { news } = this.state
    const { reds } = this.state
    const { tweets } = this.state
    const newsDisplay = news.map(news => {
      return (
        <div key={news._id} className='hover-ctr'>
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
        <div className='hover-ctr' key={red._id}>
          <a href={red.url}>
            <div className='info-rt-ctr'>
              <h3>{red.title}</h3>
            </div>
          </a>
        </div>
      )
    })
    const tweetDisplay = tweets.map(tweet => {
      return (
        <a href={tweet.url}>
          <div className='hover-ctr' key={tweet._id}>
            <div className='info-rt-ctr' >
              <h4>{tweet.text}</h4>
            </div>
          </div>
        </a>
      )
    })
    return (
      <div className='info-ctr'>
        <h1 className='coin-name'>{this.data.name}</h1>
        <div className='flex-ctr'>
          <div className='data-ctr'>
            <h2>Market Data</h2>
            <p className='info-datapts'>Current price: ${market_data.current_price.usd}</p>
            <img className='coin-logo' src={this.data.image.large} />
            <p className='info-datapts'>Market Cap Rank : {market_data.market_cap_rank}</p>
            <p className='info-datapts'>Circulating Supply:{market_data.circulating_supply}</p>
            <p className='info-datapts'>24h High: {market_data.high_24h.usd}</p>
            <p className='info-datapts'>24h Low: {market_data.low_24h.usd}</p>
            <p className='info-datapts'>Market Cap Change 24H: {market_data.market_cap_change_24h}</p>
            <p className='info-datapts'>Market Cap % Change 24h: {market_data.market_cap_change_percentage_24h}</p>
            <p className='info-datapts'>Price Change 24H: {market_data.price_change_24h}</p>
            <p className='info-datapts'>Price Change  24H: {market_data.price_change_percentage_24h}%</p>
            <p className='info-datapts'>Price Change  7d: {market_data.price_change_percentage_7d}%</p>
            <p className='info-datapts'>Price Change  14d: {market_data.price_change_percentage_14d}%</p>
            <p className='info-datapts'>Price Change  30d: {market_data.price_change_percentage_30d}%</p>
            <p className='info-datapts'>Price Change  60d: {market_data.price_change_percentage_60d}%</p>
            <p className='info-datapts'>Price Change  200d: {market_data.price_change_percentage_200d}%</p>
            <p className='info-datapts'>Price Change  1y: {market_data.price_change_percentage_1y}%</p>
            {this.state.liked ?
              <button className='info-button unfollow' onClick={this.handleUnfavorite}>Unfollow</button>
              :
              <button className='info-button follow' onClick={this.handleFavorite}>Follow</button>}
          </div>
          <div className='news-base-ctr full-scroll'>
            <h2 className='info-bx-header'>News</h2>
            {newsDisplay}
          </div>
          <div className='red-twt-ctr'>
            <div className='news-base-ctr half-scroll'>
              <h2 className='info-bx-header'>Reddits</h2>
              {redsDisplay}
            </div>
            <div className='news-base-ctr half-scroll'>
              <h2 className='info-bx-header'>Tweets</h2>
              {tweetDisplay}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinInfo