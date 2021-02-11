import {
  PLAYER_INFO_REQUEST,
  PLAYER_INFO_SUCCESS,
  PLAYER_INFO_ERROR,
  PLAYER_VEHICLES_REQUEST,
  PLAYER_VEHICLES_SUCCESS,
  PLAYER_VEHICLES_ERROR,
  PLAYER_VEHICLE_STATS_REQUEST,
  PLAYER_VEHICLE_STATS_SUCCESS,
  PLAYER_VEHICLE_STATS_ERROR,
  VEHICLES_ALL_REQUEST,
  VEHICLES_ALL_SUCCESS,
  VEHICLES_ALL_ERROR,
} from './constants'
function reducer(state, action) {
  if (action.type === PLAYER_INFO_REQUEST) {
    return {
      ...state,
      loading: true,
      playerInfo: [],
    }
  }
  if (action.type === PLAYER_INFO_SUCCESS) {
    return {
      ...state,
      loading: false,
      playerInfo: action.payload.playerInfo,
    }
  }
  if (action.type === PLAYER_INFO_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      playerInfo: [],
    }
  }
  if (action.type === PLAYER_VEHICLES_REQUEST) {
    return {
      ...state,
      loading: true,
      playerVehicles: [],
    }
  }
  if (action.type === PLAYER_VEHICLES_SUCCESS) {
    return {
      ...state,
      loading: false,
      playerVehicles: action.payload.playerVehicles,
    }
  }
  if (action.type === PLAYER_VEHICLES_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      playerVehicles: [],
    }
  }
  if (action.type === PLAYER_VEHICLE_STATS_REQUEST) {
    return {
      ...state,
      loading: true,
      playerVehiclesStats: [],
    }
  }
  if (action.type === PLAYER_VEHICLE_STATS_SUCCESS) {
    return {
      ...state,
      loading: false,
      playerVehiclesStats: action.payload.playerVehiclesStats,
    }
  }
  if (action.type === PLAYER_VEHICLE_STATS_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      playerVehiclesStats: [],
    }
  }
  if (action.type === VEHICLES_ALL_REQUEST) {
    return {
      ...state,
      loadingVehicles: true,
      allVehicles: [],
    }
  }
  if (action.type === VEHICLES_ALL_SUCCESS) {
    return {
      ...state,
      loadingVehicles: false,
      allVehicles: action.payload.allVehicles,
    }
  }
  if (action.type === VEHICLES_ALL_ERROR) {
    return {
      ...state,
      loadingVehicles: false,
      error: action.payload.error,
      allVehicles: [],
    }
  }
  return state
}

export default reducer
