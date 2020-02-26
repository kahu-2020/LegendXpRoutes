const router = require("express").Router();
const db = require("../db/mobs");

router.get("/mobs", (req, res) => {
  db.getMobs()
    .then(mob => {
      res.json(mob);
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});
router.get("/mobs/era/:era", (req, res) => {
  db.getMobsByEra()
    .then(mob => {
      res.json(mob);
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});
router.get("/mobs/zone/:zone", (req, res) => {
  db.getMobsByZone()
    .then(mob => {
      res.json(mob);
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

router.post("/addtoxproute", (req, res) => {
  let info = req.body;
  try {
    db.addMobToRoute(info.mobid, info.userid)
    res.json({ info })
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
5