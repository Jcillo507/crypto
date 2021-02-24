import axios from 'axios'

const url = `https://data.messari.io/api`
const api_key = process.env.REACT_APP_MESSARI_KEY

const api = axios.create({
  baseURL: url,
  headers: {
    'x-api-key': api_key
  }
})

export const MarketNews = async () => {
  try {
    const news = await api.get('/v1/news?limit=100')
    return news.data
  } catch (e) {
    throw e
  }
}

export const CoinNews = async (id) => {
  try {
    const news = await api.get(`/v1/news/${id}?limit=30`)
    return news.data
  } catch (e) {
    throw e
  }
}

export const CoinDetails = async (id) => {
  try {
    const news = await api.get(`/v2/assets/${id}/profile?as-markdown`)
    return news.data
  } catch (e) {
    throw e
  }
}

export const CoinMetrics = async(id)=>{
  try {
    const metrics = await api.get(`/v1/assets/${id}/metrics`)
    return metrics.data
  } catch (e) {
    throw e
  }
}

export const CoinTimeData = async (id)=>{
  try {
    const timeData = await api.get(`/v1/assets/${id}/metrics/price/time-series?interval=1d`)
    return timeData.data
  } catch (e) {
    throw e
  }
}