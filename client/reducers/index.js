import {combineReducers} from 'redux'

import auth from './auth'
import mobs from './mobs'
import routemobs from './routemobs'
import xp from "./xp"
export default combineReducers({
  auth,
  mobs,
  routemobs,
  xp
})
