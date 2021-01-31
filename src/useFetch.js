import { useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {
  MAKE_REQUEST_PLAYER_INFO,
  GET_PLAYER_INFO,
  ERROR_PLAYER_INFO,
  MAKE_REQUEST_PLAYER_VEHICLES,
  GET_PLAYER_VEHICLES,
  ERROR_PLAYER_VEHICLES,
  MAKE_REQUEST_PLAYER_VEHICLES_STATS,
  GET_PLAYER_VEHICLES_STATS,
  ERROR_PLAYER_VEHICLES_STATS,
  MAKE_REQUEST_ALL_VEHICLES,
  GET_ALL_VEHICLES,
  ERROR_ALL_VEHICLES,
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

    const cancelToken3 = axios.CancelToken.source()
    dispatch({ type: MAKE_REQUEST_PLAYER_VEHICLES_STATS })
    axios
      .get(`${PLAYER_NAME}${urlParams}`)
      .then((res) => {
        return axios.get(
          `${PLAYER_VEHICLE_STATISTIC}${res.data.data[0].account_id}`,
          {
            cancelToken: cancelToken3.token,
          }
        )
      })
      .then((res) => {
        const id = res.config.url.slice(-9)
        dispatch({
          type: GET_PLAYER_VEHICLES_STATS,
          payload: { playerVehiclesStats: res.data.data[id] },
        })
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        dispatch({ type: ERROR_PLAYER_VEHICLES_STATS, payload: { error: e } })
      })

    return () => {
      cancelToken.cancel()

      cancelToken3.cancel()
    }
  }, [urlParams])
  useEffect(() => {
    const cancelToken4 = axios.CancelToken.source()
    dispatch({ type: MAKE_REQUEST_ALL_VEHICLES })
    axios
      .get(`${ALL_VEHICLES}`, {
        cancelToken: cancelToken4.token,
      })
      .then((res) => {
        dispatch({
          type: GET_ALL_VEHICLES,
          payload: { allVehicles: res.data.data },
        })
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        dispatch({ type: ERROR_ALL_VEHICLES, payload: { error: e } })
      })
    return () => {
      cancelToken4.cancel()
    }
  }, [])

  return {
    state,
  }
}
export default useFetch
