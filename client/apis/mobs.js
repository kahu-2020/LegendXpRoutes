import request from "superagent";
const mobs = "http://localhost:3000/api/mob/";
export function getallmobs(obj) {
  return request
    .get("http://localhost:3000/api/mob/mobs")
    .then(response => response.body)
    .then(era => {
      let mobs = [];
      for (let i = 0; i < era.length; i++) {
        if (era[i].era == obj.era) {
          mobs.push(era[i]);
        }
      }
      return mobs;
    });
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
      let routemobs = [];
      for (let i = 0; i < era.length; i++) {
        if (era[i].era == obj.era) {
          routemobs.push(era[i]);
        }
      }
      return routemobs;
    });
}
export function deleteFromRoute(obj) {
  console.log("!!!!!");
  return request
    .delete("http://localhost:3000/api/mob/mobs/route")
    .send(obj)
    .then(response => obj);
}
export function getXp() {
  return request
    .get("http://localhost:3000/api/mob/mobs/route")
    .then(response => response.body)
    .then(xp => {
      let getxp = {
        ancxp: 0,
        medxp: 0,
        indusxp: 0
      };
      let ancient = [];
      let medieval = [];
      let industrial = [];
      for (let i = 0; i < xp.length; i++) {
        if (xp[i].era == "ancient") {
          ancient.push(xp[i].xp);
        }
        if (xp[i].era == "medieval") {
          medieval.push(xp[i].xp);
        } else if (xp[i].era == "industrial") {
          industrial.push(xp[i].xp);
        }
      }
      getxp.ancient = ancient.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
      getxp.medieval = medieval.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
      getxp.industrial = industrial.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
      return getxp;
    });
}
