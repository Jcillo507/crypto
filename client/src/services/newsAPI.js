import axios from 'axios'

const url = `https://cryptocontrol.io/api/v1/public/`

const api = axios.create({
  baseURL: url,
  headers: {
    'x-api-key': 'a91f8e8f380dc0e8170982ff499c2821'
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
    console.log(coin.data)
    return coin.data
  } catch (error) {
    throw error
  }
}

export const CoinReddit = async (id) => {
  try {
    const reddit = await api.get(`/reddit/coin/${id}`)
    // console.log(reddit.data)
    return reddit.data
  } catch (error) {
    throw error
  }
}

export const CoinTweet = async (id)=>{
  try {
    const tweet = await api.get(`/tweets/coin/${id}`)
    console.log(tweet.data)
    return tweet.data
  } catch (error) {
    throw error
  }
}
