import {combineReducers} from 'redux'

import auth from './auth'
import mobs from './mobs'
export default combineReducers({
  auth,
  mobs
})
