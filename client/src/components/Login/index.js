import React from 'react'
import LoginForm from '../LoginForm/'

const Login = (props) => {
  return (
    <div className='login-ctr'>
      <h1>Login</h1>
      <div className='login-form'>
        <LoginForm {...props} />
      </div>
    </div>
  )
}
export default Login