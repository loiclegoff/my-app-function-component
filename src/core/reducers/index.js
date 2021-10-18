import { combineReducers } from 'redux'
import robotReducer from './robot.reducer'
import partReducer from './part.reducer'

const globalReducer = combineReducers({
  robotState: robotReducer,
  partState: partReducer,
})

export default globalReducer
