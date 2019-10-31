var express = require('express');
var router = express.Router();

const { Comedians } = require('../src/database')

/* GET comic details. */
router.get('/', function(req, res, next) {
  res.send('comic details coming up quick!');
});

router.get('/:comedian',async (req, res, next) => {
  try {
    //Hit the database and get a specific comedian restfully
    const comedian = req.params.comedian;
    const name = comedian.split(" ");

    const data = await Comedians.findAll({
      attributes:['document'],
      where:{first_name:name[0],last_name:name[1]}
    });
    res.send(data);
  } catch (error) {
    res.json({ error: error.message })
  }
});

module.exports = router;