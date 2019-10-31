var express = require('express');
var router = express.Router();

const { Clubs } = require('../src/database');

/* GET list of Comedians based on location */
router.get('/', async function(req, res, next) {

  try{
    let location = req.query.location;

    const data = await Clubs.findAll({
      attributes:['document'],
      where:{ document:{ address:{ city:location }}}
    });
    res.send(data);

  }
  catch(error){
    res.json({ error: error.message });
  }
});

module.exports = router;