var express = require('express');
var router = express.Router();

const { Shows } = require('../src/database');

/* GET list of shows based on venue */
router.get('/', async function(req, res, next) {

  try{
    let venue = req.query.venue;

    const data = await Shows.findAll({
      attributes:['document'],
      where:{ venue:venue}
    });
    res.send(data);

  }
  catch(error){
    res.json({ error: error.message });
  }
});

module.exports = router;