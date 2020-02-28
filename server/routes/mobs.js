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
router.post("/addtoxproute", (req, res) => {
  let info = req.body;
  try {
    db.addMobToRoute(info.mobid, info.userid)
    res.json({ info })
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/mobs/route", (req, res) => {
console.log(req.params)
  let info = req.body;
  db.getRouteMobs(info)
    .then(mob => {
      res.json(mob);
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

module.exports = router;
