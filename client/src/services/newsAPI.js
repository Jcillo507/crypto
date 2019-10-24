import axios from 'axios'

const url = `https://cryptocontrol.io/api/v1/public/`

const api = axios.create({
  baseURL: url,
  headers: {
    'x-api-key': 'a91f8e8f380dc0e8170982ff499c2821'
  }
})

const CoinNews = async ()=>{
  try {
    const coinNews = await api.get('/news')
    console.log(coinNews.data)
    return coinNews.data
  } catch (error) {
    throw error
  }
}

export default CoinNews