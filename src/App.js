import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useDispatch } from 'react-redux'
import Home from './pages/Home/Home'
import { allVehiclesInfo } from './actions/vehiclesActions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login/Login'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allVehiclesInfo())
  }, [dispatch])
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
