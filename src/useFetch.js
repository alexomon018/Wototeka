import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {
  MAKE_REQUEST_PLAYER_INFO,
  GET_PLAYER_INFO,
  ERROR_PLAYER_INFO,
} from './constants'
const API_ID = `https://api.worldoftanks.eu/wot/account/info/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const PLAYER_NAME = `https://api.worldoftanks.eu/wot/account/list/?application_id=${process.env.REACT_APP_APP_ID}&type=exact&search=`
const PLAYER_VEHICLES = `https://api.worldoftanks.eu/wot/account/tanks/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const ALL_VEHICLES = `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=${process.env.REACT_APP_APP_ID}&tank_id=`
const PLAYER_VEHICLE_STATISTIC = `https://api.worldoftanks.eu/wot/tanks/stats/?application_id=${process.env.REACT_APP_APP_ID}&account_id=`
const useFetch = (urlParams) => {
  const [state, dispatch] = useReducer(reducer, {
    playerInfo: [],
    tanks: [],
    playerVehiclesStats: [],
    loading: true,
  })

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    dispatch({ type: MAKE_REQUEST_PLAYER_INFO })
    axios
      .get(`${PLAYER_NAME}${urlParams}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        return axios.get(`${API_ID}${res.data.data[0].account_id}`)
      })
      .then((res) => {
        const id = res.config.url.slice(-9)
        dispatch({
          type: GET_PLAYER_INFO,
          payload: { playerInfo: res.data.data[id] },
        })
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        dispatch({ type: ERROR_PLAYER_INFO, payload: { error: e } })
      })

    return () => {
      cancelToken.cancel()
    }
  }, [urlParams])
  console.log(state.playerInfo)
  // useEffect(() => {
  //   const fetchPlayerVehicles = (url) => {
  //     setIsLoading(true)
  //     axios
  //       .get(url)
  //       .then((response) => {
  //         return axios.get(
  //           `${PLAYER_VEHICLES}${response.data.data[0].account_id}`
  //         )
  //       })
  //       .then((response) => {
  //         const id = response.config.url.slice(-9)
  //         setPlayerVehicles(response.data.data[id])
  //         const tanksids = response.data.data[id].map((item) => item.tank_id)
  //         setTankIds(tanksids)
  //       })
  //     fetchPlayerVehicles(`${PLAYER_NAME}${urlParams}`)
  //   }
  // }, [urlParams])
  // useEffect(() => {
  //   const fetchPlayerVehicleStatistics = (url) => {
  //     setIsLoading(true)
  //     axios
  //       .get(url)
  //       .then((response) => {
  //         return axios.get(
  //           `${PLAYER_VEHICLE_STATISTIC}${response.data.data[0].account_id}`
  //         )
  //       })
  //       .then((response) => {
  //         const id = response.config.url.slice(-9)
  //         setPlayerVehiclesStats(response.data.data[id])
  //       })
  //   }
  //   fetchPlayerVehicleStatistics(`${PLAYER_NAME}${urlParams}`)
  // }, [urlParams])
  // useEffect(() => {
  //   const fetchTanks = (url) => {
  //     setIsLoading(true)
  //     axios
  //       .get(url)
  //       .then((response) => {
  //         return axios.get(`${ALL_VEHICLES}`)
  //       })
  //       .then((response) => {
  //         setTanks(response.data.data)
  //       })
  //   }
  //   fetchTanks(`${PLAYER_NAME}${urlParams}`)
  // }, [urlParams])
  return {
    state,
  }
}
export default useFetch
