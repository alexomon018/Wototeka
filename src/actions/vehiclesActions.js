import axios from 'axios'

import {
  VEHICLES_ALL_REQUEST,
  VEHICLES_ALL_SUCCESS,
  VEHICLES_ALL_ERROR,
} from '../constants'

export const allVehiclesInfo = () => async (dispatch) => {
  try {
    dispatch({ type: VEHICLES_ALL_REQUEST })
    const {
      data: { data },
    } = await axios.get(
      `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=${process.env.REACT_APP_APP_ID}&tank_id=`
    )
    dispatch({
      type: VEHICLES_ALL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: VEHICLES_ALL_ERROR, payload: error })
  }
}
