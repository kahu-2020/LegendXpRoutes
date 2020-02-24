const router = require('express').Router()
const db = require('../db/mobs')

 
router.get('/api/v1/mobs', (req, res) => {
    db.getMobs()
      .then(mob => {
        res.json(mob)
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
})
router.get('/api/v1/mobs/era/:era', (req, res) => {
    db.getMobs()
      .then(mob => {
        res.json(mob)
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
})
router.get('/api/v1/mobs/zone/:zone', (req, res) => {
    db.getMobs()
      .then(mob => {
        res.json(mob)
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  })

module.exports = router
