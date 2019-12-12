import React from 'react'
import SignUpForm from '../SignUpForm/'
import './signup.scss'

const SignUp=(props)=> {
  return (
    <div className='signup-ctr'>
      <h1>Sign Up</h1>
      <div className='signup-form'>
      <SignUpForm {...props} />
      </div>

    </div>
  )
}

export default SignUp