import axios from "axios"

const url = `https://api.coingecko.com/api/v3/coins`

const ApiData = async () => {
  try {
    const coinData = await axios.get(url)
    return coinData.data
  }
  catch (e) {
    console.log(e)
  }
}

export default ApiData