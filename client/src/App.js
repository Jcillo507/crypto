import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { Route, Link } from 'react-router-dom'
import { login, getProfile, signUp } from './services/apiService'
import ProtectedRoute from './components/ProtectedRoute'
import authService from './services/authService'
import SignUp from './components/SignUp'
import CoinInfo from './components/CoinInfo'
// import CryptoList from './components/CryptoList'
import ApiData from './services/coinAPI'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false,
      user: {}, 
      userId: [],
      data: {},
    }

    this.loginUser = this.loginUser.bind(this)
    this.signOutUser = this.signOutUser.bind(this)
    this.signUpUser = this.signUpUser.bind(this)
  }

  async componentDidMount() {
    // fetch user data on page refresh
    try {
      const fetchedUser = await getProfile()
      const data = await this.coinCall()
      this.setState({
        isSignedIn: authService.isAuthenticated(),
        user: fetchedUser,
        data: data,
      })
      console.log(this.state)
    } catch (e) {
      // throw e
      console.log('Issue fetching token')
    }
  }
    coinCall = async () => {
    try {
      const data = await ApiData()
      this.setState({
        data: data
      })
    } 
    catch (error) {
      throw error
    }
  }

  async loginUser(credentials) {
    try {
      console.log('credentials in loginUser', credentials)
      const user = await login(credentials)
      // if login request is a success
      // update state to store user and set
      // isSignedIn to true
      this.setState({
        isSignedIn: true,
        user: user,
        userId: user.id 
      }) 
    } catch (e) {
      throw e
    }
  }

  async signUpUser(credentials) {
    try {
      console.log('credentials in signUpUser', credentials, this.state)
      const user = await signUp(credentials)

      // if signUp request is a success
      // update state to store user and set
      // isSignedIn to true
      this.setState({
        isSignedIn: true,
        user: user, 
        userId: user.id
        
      })
      
    } catch (e) {
      throw e
    }
  }

  signOutUser() {
    authService.signOut()
    this.setState({
      isSignedIn: false,
      user: {}
    })
  }

  render() {
    const { isSignedIn, user, data } = this.state

    return (
      <div className='App'>
        <nav>
          <div>
            <Link to='/'>Home</Link>
          </div>

          {!isSignedIn &&
            <div className='nav-section'>
              <Link to='/login'>Login</Link>

              <Link to='/signup'>Sign Up</Link>
            </div>
          }

          {isSignedIn &&
            <div className='nav-section'>
              <Link to='/dashboard'>Dashboard</Link>

              <button onClick={this.signOutUser}> Sign out</button>
            </div>
          }
        </nav>
         
        <main>
        <Route exact path='/' component={(props)=><Home {...props} coins={this.state.data} userId={this.state.userId}/>}/>

          {/* <ProtectedRoute> to "protect" our <Dashboard> component  */}
          <ProtectedRoute
            path='/dashboard'
            user={user}
            component={Dashboard}
          />

          <Route
            path='/login'
            render={
              (props) =>
                <Login
                  {...props}
                  handleLogin={this.loginUser}
                  isSignedIn={isSignedIn}
                />
            }
          />

          <Route
            path='/signup'
            render={
              (props) =>
                <SignUp
                  {...props}
                  handleSignUp={this.signUpUser}
                  isSignedIn={isSignedIn}
                />
            }
          />
          
            <Route
              exact path={`/CoinInfo/:id`}
              exact component={(props) => <CoinInfo {...props} data={data} user={user}/>}
            />
          
        </main>
      </div>
    )
  }
}

export default App