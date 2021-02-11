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

export const playerInfoReducer = (state = { playerData: [] }, action) => {
  switch (action.type) {
    case PLAYER_INFO_REQUEST:
      return {
        loading: true,
        playerData: [],
      }
    case PLAYER_INFO_SUCCESS:
      return {
        loading: false,
        playerData: action.payload,
      }
    case PLAYER_INFO_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const playerPersonalDataInfoReducer = (
  state = { playerPersonalData: [] },
  action
) => {
  switch (action.type) {
    case PLAYER_PERSONAL_DATA_REQUEST:
      return {
        loading: true,
        playerPersonalData: [],
      }
    case PLAYER_PERSONAL_DATA_SUCCESS:
      return {
        loading: false,
        playerPersonalData: action.payload,
      }
    case PLAYER_PERSONAL_DATA_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const playerPersonalVehiclesInfoReducer = (
  state = { playerPersonalVehicles: [] },
  action
) => {
  switch (action.type) {
    case PLAYER_VEHICLES_REQUEST:
      return {
        loading: true,
        playerPersonalVehicles: [],
      }
    case PLAYER_VEHICLES_SUCCESS:
      return {
        loading: false,
        playerPersonalVehicles: action.payload,
      }
    case PLAYER_VEHICLES_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const playerVehiclesStatsInfoReducer = (
  state = { playerVehiclesStats: [] },
  action
) => {
  switch (action.type) {
    case PLAYER_VEHICLE_STATS_REQUEST:
      return {
        loading: true,
        playerVehiclesStats: [],
      }
    case PLAYER_VEHICLE_STATS_SUCCESS:
      return {
        loading: false,
        playerVehiclesStats: action.payload,
      }
    case PLAYER_VEHICLE_STATS_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
