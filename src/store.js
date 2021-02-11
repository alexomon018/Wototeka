import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  playerInfoReducer,
  playerPersonalDataInfoReducer,
  playerPersonalVehiclesInfoReducer,
  playerVehiclesStatsInfoReducer,
} from './reducers/playerReducers'
import { allVehiclesInfoReducer } from './reducers/vehiclesReducers'
const reducer = combineReducers({
  playerInfo: playerInfoReducer,
  playerPersonalDataInfo: playerPersonalDataInfoReducer,
  playerPersonalVehiclesInfo: playerPersonalVehiclesInfoReducer,
  playerVehiclesStatsInfo: playerVehiclesStatsInfoReducer,
  allVehiclesInfo: allVehiclesInfoReducer,
})

const initalState = {
  playerInfo: { playerData: [] },
  playerPersonalDataInfo: { playerPersonalData: [] },
  playerPersonalVehiclesInfo: { playerPersonalVehicles: [] },
  playerVehiclesStatsInfo: { playerVehiclesStats: [] },
  allVehiclesInfo: { allVehicles: [] },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
