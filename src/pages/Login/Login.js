import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/playerActions'
import './Login.css'
import { IoEnter } from 'react-icons/io5'

function Login() {
  const dispatch = useDispatch()

  const submitHandler = () => {
    //Dispatch LOGIN
    dispatch(login())
  }

  return (
    <div className='login__container'>
      <h1>Login With Wargaming Account</h1>
      <p>Please select your server : </p>
      <div className='login__server__wrapper'>
        <div className='login__option'>
          <IoEnter />
          <h4>Ru</h4>
          <p>Russian Server</p>
        </div>
        <div className='login__option' onClick={submitHandler}>
          <IoEnter />
          <h4>Eu</h4>
          <p>European Server</p>
        </div>
        <div className='login__option'>
          <IoEnter />
          <h4>Na</h4>
          <p>American Server</p>
        </div>
      </div>
    </div>
  )
}

export default Login
