import {
  PLAYER_DATA_REQUEST,
  PLAYER_DATA_SUCCESS,
  PLAYER_DATA_ERROR,
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
