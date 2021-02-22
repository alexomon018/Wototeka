import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { playerDataRedcuer, userLoginReducer } from './reducers/playerReducers'
import { allVehiclesInfoReducer } from './reducers/vehiclesReducers'
const reducer = combineReducers({
  userLogin: userLoginReducer,
  playerData: playerDataRedcuer,
  allVehiclesInfo: allVehiclesInfoReducer,
})

const allVehiclesFromStorage = localStorage.getItem('allVehicles')
  ? JSON.parse(localStorage.getItem('allVehicles'))
  : []
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const initalState = {
  playerData: { allPlayerData: [] },
  allVehiclesInfo: allVehiclesFromStorage,
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
