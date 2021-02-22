import axios from 'axios'

import {
  PLAYER_DATA_REQUEST,
  PLAYER_DATA_SUCCESS,
  PLAYER_DATA_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants'

export const listPlayerData = (query) => async (dispatch) => {
  try {
    dispatch({ type: PLAYER_DATA_REQUEST })
    const {
      data: { data },
    } = await axios.get(
      `https://api.worldoftanks.eu/wot/account/list/?application_id=${process.env.REACT_APP_APP_ID}&type=exact&language=en&limit=5&search=${query}`
    )
    const id = data[0].account_id
    console.log(id)

    axios
      .all([
        axios.get(
          `https://api.worldoftanks.eu/wot/account/info/?application_id=${process.env.REACT_APP_APP_ID}&account_id=${id}`
        ),
        axios.get(
          `https://api.worldoftanks.eu/wot/account/tanks/?application_id=${process.env.REACT_APP_APP_ID}&account_id=${id}`
        ),
        axios.get(
          `https://api.worldoftanks.eu/wot/tanks/stats/?application_id=${process.env.REACT_APP_APP_ID}&account_id=${id}`
        ),
      ])
      .then(
        axios.spread((personalData, playerVehicles, playerVehiclesStats) => {
          dispatch({
            type: PLAYER_DATA_SUCCESS,
            payload: [
              personalData.data.data[id],
              playerVehicles.data.data[id],
              playerVehiclesStats.data.data[id],
            ],
          })
        })
      )
  } catch (error) {
    dispatch({ type: PLAYER_DATA_ERROR, payload: error })
  }
}
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const { data } = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api.worldoftanks.eu/wot/auth/login/?application_id=1ae4e17b5583503926f5c68e8897e8c7&display=page&redirect_uri=https%3A%2F%2Fdevelopers.wargaming.net%2Freference%2Fall%2Fwot%2Fauth%2Flogin%2F'
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    })
  }
}
