import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { playerDataRedcuer } from './reducers/playerReducers'
import { allVehiclesInfoReducer } from './reducers/vehiclesReducers'
const reducer = combineReducers({
  playerData: playerDataRedcuer,
  allVehiclesInfo: allVehiclesInfoReducer,
})

const allVehiclesFromStorage = localStorage.getItem('allVehicles')
  ? JSON.parse(localStorage.getItem('allVehicles'))
  : []

const initalState = {
  playerData: { allPlayerData: [] },
  allVehiclesInfo: allVehiclesFromStorage,
}

const middleware = [thunk]
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
