import {
  VEHICLES_ALL_REQUEST,
  VEHICLES_ALL_SUCCESS,
  VEHICLES_ALL_ERROR,
} from '../constants'

export const allVehiclesInfoReducer = (state = { allVehicles: [] }, action) => {
  switch (action.type) {
    case VEHICLES_ALL_REQUEST:
      return {
        loading: true,
        allVehicles: [],
      }
    case VEHICLES_ALL_SUCCESS:
      return {
        loading: false,
        allVehicles: action.payload,
      }
    case VEHICLES_ALL_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
