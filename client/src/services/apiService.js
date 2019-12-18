import axios from 'axios'
const BASE_URL = 'http://jccn.herokuapp.com/'

// get token from localStorage (if it exists)
const JWT_TOKEN = localStorage.getItem('token')

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${JWT_TOKEN}`
  }
})

export const login = async (data) => {
  try {
    const response = await api.post('/auth/login', data)
    const { data: { token, user} } = response

    // store token in localStorage
    // so it can be used on subsequent requests
    localStorage.setItem('token', token)
    return user
  } catch (e) {
    throw e
  }
}

export const getProfile = async () => {
  try {
    const response = await api.get('/app/profile')
    const { data: { user } } = response
    return user
  } catch (e) {
    throw e
  }
}

export const signUp = async (data) => {
  try {
    const response = await api.post('/auth/signup', data)
    const { data: { user, token } } = response
    console.log(user)
    // store token in localStorage
    // so it can be used on subsequent requests
    localStorage.setItem('token', token)
    return user
  } catch (e) {
    throw e
  }
}

export const addCoin = async(userId, coin)=>{
  try {
    const response = await api.post(`/dashboard/${userId}`, coin)
    return response
  } catch (error) {
    throw error
  }
}

export const getFaves = async (userId)=>{
  try {
    const resp = await api.get(`/dashboard/${userId}`)
    return resp.data
  } catch (error) {
    throw error
  }
}
export const deleteCoin = async (userId, coin) => {
  try {
    console.log(userId, coin)
    const response = await api.put(`/dashboard/${userId}/${coin.name}`, coin.name)
    console.log(response)
    return response
  } catch (error) {
    throw error
  }
}