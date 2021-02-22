import {
  PLAYER_DATA_REQUEST,
  PLAYER_DATA_SUCCESS,
  PLAYER_DATA_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants'

export const playerDataRedcuer = (state = { allPlayerData: [] }, action) => {
  switch (action.type) {
    case PLAYER_DATA_REQUEST:
      return {
        loading: true,
        allPlayerData: [],
      }
    case PLAYER_DATA_SUCCESS:
      return {
        loading: false,
        allPlayerData: action.payload,
      }
    case PLAYER_DATA_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export const userLoginReducer = (state = {}, action) => {
  if (action.type === USER_LOGIN_REQUEST) {
    return { loading: true }
  }
  if (action.type === USER_LOGIN_SUCCESS) {
    return { loading: false, userInfo: action.payload }
  }
  if (action.type === USER_LOGIN_FAIL) {
    return { loading: false, error: action.payload }
  }

  return state
}
