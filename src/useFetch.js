import { useEffect, useReducer } from 'react'
import reducer from './reducer'
import {
  MAKE_REQUEST_PLAYER_INFO,
  GET_PLAYER_INFO,
  ERROR_PLAYER_INFO,
  MAKE_REQUEST_PLAYER_VEHICLES,
  GET_PLAYER_VEHICLES,
  MAKE_REQUEST_PLAYER_VEHICLES_STATS,
  GET_PLAYER_VEHICLES_STATS,
  MAKE_REQUEST_ALL_VEHICLES,
  GET_ALL_VEHICLES,
} from './constants'
const API_ID = `https://api.worldoftanks.eu/wot/account/info/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const PLAYER_NAME = `https://api.worldoftanks.eu/wot/account/list/?application_id=${process.env.REACT_APP_APP_ID}&type=exact&search=`
const PLAYER_VEHICLES = `https://api.worldoftanks.eu/wot/account/tanks/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const ALL_VEHICLES = `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=${process.env.REACT_APP_APP_ID}&tank_id=`
const PLAYER_VEHICLE_STATISTIC = `https://api.worldoftanks.eu/wot/tanks/stats/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const useFetch = (urlParams) => {
  const [state, dispatch] = useReducer(reducer, {
    players: [],
    playerInfo: [],
    playerVehicles: [],
    playerVehiclesStats: [],
    allVehicles: [],
    loading: true,
    loadingVehicles: true,
  })
  const getPlayerData = async (urlParams) => {
    try {
      dispatch({ type: MAKE_REQUEST_PLAYER_INFO })
      const playerId = await fetch(`${PLAYER_NAME}${urlParams}`).then((res) =>
        res.json()
      )
      const playerInfo = await fetch(
        `${API_ID}${playerId.data[0].account_id}`
      ).then((res) => res.json())
      dispatch({
        type: GET_PLAYER_INFO,
        payload: { playerInfo: playerInfo.data[playerId.data[0].account_id] },
      })
      dispatch({ type: MAKE_REQUEST_PLAYER_VEHICLES })
      const playerVehicles = await fetch(
        `${PLAYER_VEHICLES}${playerId.data[0].account_id}`
      ).then((res) => res.json())
      dispatch({
        type: GET_PLAYER_VEHICLES,
        payload: {
          playerVehicles: playerVehicles.data[playerId.data[0].account_id],
        },
      })
      dispatch({ type: MAKE_REQUEST_PLAYER_VEHICLES_STATS })
      const playerVehiclesStats = await fetch(
        `${PLAYER_VEHICLE_STATISTIC}${playerId.data[0].account_id}`
      ).then((res) => res.json())
      dispatch({
        type: GET_PLAYER_VEHICLES_STATS,
        payload: {
          playerVehiclesStats:
            playerVehiclesStats.data[playerId.data[0].account_id],
        },
      })
      dispatch({ type: MAKE_REQUEST_ALL_VEHICLES })
      const allVehicles = await fetch(`${ALL_VEHICLES}`).then((res) =>
        res.json()
      )
      dispatch({
        type: GET_ALL_VEHICLES,
        payload: {
          allVehicles: allVehicles.data,
        },
      })
    } catch (error) {
      dispatch({ type: ERROR_PLAYER_INFO, payload: { error } })
    }
  }
  useEffect(() => {
    getPlayerData(urlParams)
  }, [urlParams])

  return {
    state,
  }
}
export default useFetch
