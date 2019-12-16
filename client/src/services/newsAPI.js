import axios from 'axios'

const url = `https://cryptocontrol.io/api/v1/public/`
const api_key = process.env.REACT_APP_CRYPTONEWSAPI

const api = axios.create({
  baseURL: url,
  headers: {
    'x-api-key': api_key
  }
})

export const CryptoNews = async () => {
  try {
    const news = await api.get('/news')
    return news.data
  } catch (error) {
    throw error
  }
}

export const CoinNews = async (id) => {
  try {
    const coin = await api.get(`/news/coin/${id}`)
    return coin.data
  } catch (error) {
    throw error
  }
}

export const CoinReddit = async (id) => {
  try {
    const reddit = await api.get(`/reddit/coin/${id}`)
    return reddit.data
  } catch (error) {
    throw error
  }
}

export const CoinTweet = async (id)=>{
  try {
    const tweet = await api.get(`/tweets/coin/${id}`)
    return tweet.data
  } catch (error) {
    throw error
  }
}
