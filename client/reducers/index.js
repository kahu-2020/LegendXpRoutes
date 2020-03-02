import { combineReducers } from "redux";

import auth from "./auth";
import mobs from "./mobs";
import routemobs from "./routemobs";
import xp from "./xp";
import xpgained from "./xpgained";
export default combineReducers({
  auth,
  mobs,
  routemobs,
  xp,
  xpgained
});
