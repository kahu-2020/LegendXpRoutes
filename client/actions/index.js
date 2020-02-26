import request from "superagent";
import { getallmobs, addmobtoroute } from "../apis/mobs"
export const SET_MOBS = 'SET_MOBS'

export const setmobs = mobs => {
    return {
        type: SET_MOBS,
        mobs: mobs  
    }
}
export function fetchmobs() {
    return dispatch => {
        return getallmobs().then(mobs => {
            return dispatch(setmobs(mobs))
        })
    }
}
export function addtoRoute(mobID, userID) {
    console.log("got here")
    return dispatch => {
        return addmobtoroute(mobID, userID)

    }
}


