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
function reducer(state, action) {
  if (action.type === MAKE_REQUEST_PLAYER_INFO) {
    return {
      ...state,
      loading: true,
      playerInfo: [],
    }
  }
  if (action.type === GET_PLAYER_INFO) {
    return {
      ...state,
      loading: false,
      playerInfo: action.payload.playerInfo,
    }
  }
  if (action.type === ERROR_PLAYER_INFO) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      playerInfo: [],
    }
  }
  if (action.type === MAKE_REQUEST_PLAYER_VEHICLES) {
    return {
      ...state,
      loading: true,
      playerVehicles: [],
    }
  }
  if (action.type === GET_PLAYER_VEHICLES) {
    return {
      ...state,
      loading: false,
      playerVehicles: action.payload.playerVehicles,
    }
  }
  if (action.type === ERROR_PLAYER_VEHICLES) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      playerVehicles: [],
    }
  }
  if (action.type === MAKE_REQUEST_PLAYER_VEHICLES_STATS) {
    return {
      ...state,
      loading: true,
      playerVehiclesStats: [],
    }
  }
  if (action.type === GET_PLAYER_VEHICLES_STATS) {
    return {
      ...state,
      loading: false,
      playerVehiclesStats: action.payload.playerVehiclesStats,
    }
  }
  if (action.type === ERROR_PLAYER_VEHICLES_STATS) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      playerVehiclesStats: [],
    }
  }
  if (action.type === MAKE_REQUEST_ALL_VEHICLES) {
    return {
      ...state,
      loadingVehicles: true,
      allVehicles: [],
    }
  }
  if (action.type === GET_ALL_VEHICLES) {
    return {
      ...state,
      loadingVehicles: false,
      allVehicles: action.payload.allVehicles,
    }
  }
  if (action.type === ERROR_ALL_VEHICLES) {
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
