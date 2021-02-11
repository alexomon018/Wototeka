import axios from 'axios'

import {
  PLAYER_INFO_REQUEST,
  PLAYER_INFO_SUCCESS,
  PLAYER_INFO_ERROR,
  PLAYER_PERSONAL_DATA_REQUEST,
  PLAYER_PERSONAL_DATA_SUCCESS,
  PLAYER_PERSONAL_DATA_ERROR,
  PLAYER_VEHICLES_REQUEST,
  PLAYER_VEHICLES_SUCCESS,
  PLAYER_VEHICLES_ERROR,
  PLAYER_VEHICLE_STATS_REQUEST,
  PLAYER_VEHICLE_STATS_SUCCESS,
  PLAYER_VEHICLE_STATS_ERROR,
} from '../constants'
export const listPlayerInfos = (query) => async (dispatch) => {
  const cancelToken = axios.CancelToken.source()
  try {
    dispatch({ type: PLAYER_INFO_REQUEST })
    const {
      data: { data },
    } = await axios.get(
      `https://api.worldoftanks.eu/wot/account/list/?application_id=${process.env.REACT_APP_APP_ID}&type=exact&language=en&limit=5&search=${query}`,
      { cancelToken: cancelToken.token }
    )
    dispatch({
      type: PLAYER_INFO_SUCCESS,
      payload: data,
    })
    localStorage.setItem('playerData', JSON.stringify(data))
  } catch (error) {
    if (axios.isCancel(error)) return
    dispatch({ type: PLAYER_INFO_ERROR, payload: error })
  }
}
export const playerPersonalDataInformation = (id) => async (dispatch) => {
  try {
    dispatch({ type: PLAYER_PERSONAL_DATA_REQUEST })
    const {
      data: { data },
    } = await axios.get(
      `https://api.worldoftanks.eu/wot/account/info/?application_id=${process.env.REACT_APP_APP_ID}&account_id=${id}`
    )
    dispatch({
      type: PLAYER_PERSONAL_DATA_SUCCESS,
      payload: data[id],
    })
  } catch (error) {
    dispatch({ type: PLAYER_PERSONAL_DATA_ERROR, payload: error })
  }
}
export const playerPersonalVehiclesInformation = (id) => async (dispatch) => {
  try {
    dispatch({ type: PLAYER_VEHICLES_REQUEST })
    const {
      data: { data },
    } = await axios.get(
      `https://api.worldoftanks.eu/wot/account/tanks/?application_id=${process.env.REACT_APP_APP_ID}&account_id=${id}`
    )
    dispatch({
      type: PLAYER_VEHICLES_SUCCESS,
      payload: data[id],
    })
  } catch (error) {
    dispatch({ type: PLAYER_VEHICLES_ERROR, payload: error })
  }
}
export const playerVehiclesStatsInformation = (id) => async (dispatch) => {
  try {
    dispatch({ type: PLAYER_VEHICLE_STATS_REQUEST })
    const {
      data: { data },
    } = await axios.get(
      `https://api.worldoftanks.eu/wot/tanks/stats/?application_id=${process.env.REACT_APP_APP_ID}&account_id=${id}`
    )
    dispatch({
      type: PLAYER_VEHICLE_STATS_SUCCESS,
      payload: data[id],
    })
  } catch (error) {
    dispatch({ type: PLAYER_VEHICLE_STATS_ERROR, payload: error })
  }
}
