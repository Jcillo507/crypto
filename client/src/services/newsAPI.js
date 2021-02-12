import axios from 'axios'

const url = `https://data.messari.io/api`
const api_key = process.env.REACT_APP_MESSARI_KEY

const api = axios.create({
  baseURL: url,
  headers: {
    'x-api-key': api_key
  }
})

export const CoinNews = async ()=>{
  try {
    const news = await api.get('/v1/news/btc?limit=500')
    return news.data
  } catch (e) {
    throw e
  }
}