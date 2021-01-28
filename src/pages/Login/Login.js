import React from 'react'
import './Login.css'
import { ImEnter } from 'react-icons/im'
function Login() {
  return (
    <div className='login__container'>
      <h1>Login with wargaming account</h1>
      <p>Please select your server</p>
      <div className='server__wrapper'>
        <a href=''>
          <ImEnter />
          EU Server{' '}
        </a>
        <a href=''>
          <ImEnter />
          NA Server
        </a>
        <a href=''>
          <ImEnter /> Ru Server
        </a>
      </div>
    </div>
  )
}

export default Login
