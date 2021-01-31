import {
  MAKE_REQUEST_PLAYER_INFO,
  GET_PLAYER_INFO,
  ERROR_PLAYER_INFO,
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
  return state
}

export default reducer
