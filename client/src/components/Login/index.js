import React from 'react'
import LoginForm from './LoginForm'
import './login.scss'

const Login=(props) =>{
  return (
    <div className='login-ctr'>
      <h1>Login</h1>

      <LoginForm {...props} />
    </div>
  )
}
export default Login