import request from "superagent";
const mobs = "http://localhost:3000/api/mob/";
export function getallmobs(obj) {
  return request
    .get("http://localhost:3000/api/mob/mobs")
    .then(response => response.body)
    .then(era => {
      let mobs = []
      for (let i = 0; i < era.length; i++) {
        if (era[i].era == obj.era) {
          mobs.push(era[i])
        }
      }
      return mobs
      })
}

export function addmobtoroute(obj) {
  return request
    .post("http://localhost:3000/api/mob/addtoxproute")
    .send(obj)
    .then(response => obj);
}
export function getAllRouteMobs(obj) {
  return request
    .get("http://localhost:3000/api/mob/mobs/route")
    .send(obj)
    .then(response => response.body)
    .then(era => {
      let routemobs = []
      for (let i = 0; i < era.length; i++) {
        if (era[i].era == obj.era) {
          routemobs.push(era[i])
        }
      }
      return routemobs
      })
  
}
export function getXp() {
  return request
    .get("http://localhost:3000/api/mob/mobs/route")
        .then(response => response.body)
    .then(xp => {
      let getxp = {
        ancxp: 0,
        medxp: 0,
        indusxp:0,
      }
      let ancxp=[]
      let medxp=[]
      let indusxp = []
      for (let i = 0; i < xp.length; i++) { 
        if (xp[i].era == "ancient") {
          ancxp.push(xp[i].xp)
        }
        if (xp[i].era == "medieval") {
          medxp.push(xp[i].xp)
        }
        else if (xp[i].era == "industrial") {
          indusxp.push(xp[i].xp)
        }
      }
      getxp.ancxp = ancxp.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
      }, 0)
      getxp.medxp = medxp.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
      }, 0)
      getxp.indusxp = indusxp.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
      }, 0)
      return getxp
    })
}
