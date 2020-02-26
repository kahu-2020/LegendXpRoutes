import request from "superagent";
const mobs = "http://localhost:3000/api/mob/";
export function getallmobs() {
  return request
    .get("http://localhost:3000/api/mob/mobs")
    .then(response => response.body);
}

export function addmobtoroute(addmob) {
    console.log(addmob)
    return request
    .post("http://localhost:3000/api/mob/addtoxproute")
    .send(addmob)
    .then(response => addmob);
}
