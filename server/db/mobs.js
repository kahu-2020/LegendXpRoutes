const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const connection = require("knex")(config);

function getMobs(db = connection) {
  return db("mobs").select();
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

  return db("xproutes")
    .insert({ mob_id: mobID, user_id: userID })
    .then()
}

module.exports = {
  getMobs,
  getMobsByEra,
  getMobsByZone,
  addMobToRoute
};
