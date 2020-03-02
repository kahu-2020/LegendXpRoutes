const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const connection = require("knex")(config);

function getMobs(db = connection) {
  return db("mobs").select();
}
function getRouteMobs(id, db = connection) {
  return db("xproutes")
    .join("mobs", "mobs.id", "=", "mob_id")
    .select()
    .where({ user_id: 1 });
}

function getMobsByEra(era, db = connection) {
  return db("mobs")
    .select()
    .where({ era: era });
}

function getMobsByZone(zone, db = connection) {
  return db("mobs")
    .select()
    .where({ zone: zone });
}

function addMobToRoute(mobID, userID, db = connection) {
  console.log("mobsid " + mobID);
  console.log("userID " + userID);
  return db("xproutes")
    .insert({ mob_id: mobID, user_id: userID })
    .then();
}
function delMobFromRoute(mobID, userID, db = connection) {
  console.log("got baCK HERE ");
  console.log(mobID)
  console.log(userID)
  return db("xproutes")
    .where({ mob_id: mobID })
    .where({ user_id: userID })
    .del();
}

module.exports = {
  getMobs,
  getMobsByEra,
  getMobsByZone,
  addMobToRoute,
  getRouteMobs,
  delMobFromRoute
};
