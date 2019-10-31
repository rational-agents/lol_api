var express = require('express');
var router = express.Router();

const { Shows } = require('../src/database');

/* GET club details. */
router.get('/', function(req, res, next) {
  res.send('show details coming up!');
});

router.get('/:headline', async (req, res, next) => {
  try {
    //Hit the database and get a specific show restfully
    const headline = req.params.headline;

    const data = await Shows.findAll({
      attributes:['document'],
      where:{ headline:headline}
    });
    res.send(data);
  } catch (error) {
    res.json({ error: error.message });
  }
})

module.exports = router;