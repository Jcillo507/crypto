import React from 'react'
import SignUpForm from './SignUpForm'

const SignUp=(props)=> {
  return (
    <div>
      <h1>Sign Up</h1>

      <SignUpForm {...props} />
    </div>
  )
}

export default SignUp