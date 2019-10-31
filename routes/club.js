var express = require('express');
var router = express.Router();

const { Clubs } = require('../src/database')

/* GET club details. */
router.get('/', function(req, res, next) {
  res.send('club details coming up!');
});

router.get('/:venue', async (req, res, next) => {
  try {
    //Hit the database and get a specific club restfully
    const venue = req.params.venue;

    const data = await Clubs.findAll({
      attributes:['document'],
      where:{ venue:venue}
    });
    res.send(data);
  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router;