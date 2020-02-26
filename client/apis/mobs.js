import request from "superagent";
const mobs = "http://localhost:3000/api/mob/";
export function getallmobs() {
  return request
    .get("http://localhost:3000/api/mob/mobs")
    .then(response => response.body);
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
        .send(1)
    .then(response => response.body);
}