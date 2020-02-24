  
const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)


function getMobs(db = connection) {
    return db('mobs').select()
  }

function getMobsByEra(era, db = connection) {
    return db('mobs').select().where({era: era})
}

function getMobsByZone(zone, db = connection) {
    return db('mobs').select().where({zone: zone})
  }


module.exports = {
    getMobs,
    getMobsByEra,
    getMobsByZone
  }
  