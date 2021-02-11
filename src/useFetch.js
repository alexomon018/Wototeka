import { useEffect, useReducer } from 'react'
import reducer from './reducer'
import {
  PLAYER_INFO_REQUEST,
  PLAYER_INFO_SUCCESS,
  PLAYER_INFO_ERROR,
  PLAYER_VEHICLES_REQUEST,
  PLAYER_VEHICLES_SUCCESS,
  PLAYER_VEHICLE_STATS_REQUEST,
  PLAYER_VEHICLE_STATS_SUCCESS,
  VEHICLES_ALL_REQUEST,
  VEHICLES_ALL_SUCCESS,
} from './constants'
const API_ID = `https://api.worldoftanks.eu/wot/account/info/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const PLAYER_NAME = `https://api.worldoftanks.eu/wot/account/list/?application_id=${process.env.REACT_APP_APP_ID}&type=exact&search=`
const PLAYER_VEHICLES = `https://api.worldoftanks.eu/wot/account/tanks/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const ALL_VEHICLES = `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=${process.env.REACT_APP_APP_ID}&tank_id=`
const PLAYER_VEHICLE_STATISTIC = `https://api.worldoftanks.eu/wot/tanks/stats/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const useFetch = (urlParams) => {
  const [state, dispatch] = useReducer(reducer, {
    playerInfo: [],
    playerVehicles: [],
    playerVehiclesStats: [],
    allVehicles: [],
    loading: true,
    loadingVehicles: true,
  })
  const getPlayerData = async (urlParams) => {
    try {
      dispatch({ type: PLAYER_INFO_REQUEST })
      const playerId = await fetch(`${PLAYER_NAME}${urlParams}`).then((res) =>
        res.json()
      )
      const playerInfo = await fetch(
        `${API_ID}${playerId.data[0].account_id}`
      ).then((res) => res.json())
      dispatch({
        type: PLAYER_INFO_SUCCESS,
        payload: { playerInfo: playerInfo.data[playerId.data[0].account_id] },
      })
      dispatch({ type: PLAYER_VEHICLES_REQUEST })
      const playerVehicles = await fetch(
        `${PLAYER_VEHICLES}${playerId.data[0].account_id}`
      ).then((res) => res.json())
      dispatch({
        type: PLAYER_VEHICLES_SUCCESS,
        payload: {
          playerVehicles: playerVehicles.data[playerId.data[0].account_id],
        },
      })
      dispatch({ type: PLAYER_VEHICLE_STATS_REQUEST })
      const playerVehiclesStats = await fetch(
        `${PLAYER_VEHICLE_STATISTIC}${playerId.data[0].account_id}`
      ).then((res) => res.json())
      dispatch({
        type: PLAYER_VEHICLE_STATS_SUCCESS,
        payload: {
          playerVehiclesStats:
            playerVehiclesStats.data[playerId.data[0].account_id],
        },
      })
      dispatch({ type: VEHICLES_ALL_REQUEST })
      const allVehicles = await fetch(`${ALL_VEHICLES}`).then((res) =>
        res.json()
      )
      dispatch({
        type: VEHICLES_ALL_SUCCESS,
        payload: {
          allVehicles: allVehicles.data,
        },
      })
    } catch (error) {
      dispatch({ type: PLAYER_INFO_ERROR, payload: { error } })
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
