import request from "superagent";
import { getallmobs, addmobtoroute, getAllRouteMobs } from "../apis/mobs"
export const SET_MOBS = 'SET_MOBS'
export const SET_ROUTEMOBS = 'SET_ROUTEMOBS'

export const setmobs = mobs => {
    return {
        type: SET_MOBS,
        mobs: mobs  
    }
}
export const setRouteMobs = mobs => {
    return {
        type: SET_ROUTEMOBS,
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
    return dispatch => {
        addmobtoroute(mobID, userID)
        return dispatch(fetchRouteMobs(1))
    }
}
export function fetchRouteMobs(int) {
    return dispatch => {
        return getAllRouteMobs(int).then(mobs => {
            return dispatch(setRouteMobs(mobs))
        })
    }
}
