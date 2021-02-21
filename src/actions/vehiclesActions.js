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
    } = await axios.get(`/tanks.json`)
    dispatch({
      type: VEHICLES_ALL_SUCCESS,
      payload: data,
    })
    localStorage.setItem('allVehicles', JSON.stringify(data))
  } catch (error) {
    dispatch({ type: VEHICLES_ALL_ERROR, payload: error })
  }
}
