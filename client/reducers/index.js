import {combineReducers} from 'redux'

import auth from './auth'
import mobs from './mobs'
import routemobs from './routemobs'
export default combineReducers({
  auth,
  mobs,
  routemobs
})
