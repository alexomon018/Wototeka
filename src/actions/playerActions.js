import axios from 'axios'

import {
  PLAYER_DATA_REQUEST,
  PLAYER_DATA_SUCCESS,
  PLAYER_DATA_ERROR,
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
