var express = require('express');
var router = express.Router();

const { Shows } = require('../src/database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET list of shows based on venue */
router.get('/', async function(req, res, next) {

  try{

    let venue = req.query.venue;
    let comedian = req.query.comedian;
    let data;

    // query for both a venue and comedian
    if( req.query.venue && req.query.comedian){
        data = await Shows.findAll({
        attributes:['document'],
        where:{ [Op.and]:[ { venue:venue },{ document:{ [Op.contains]:{ lineup:[comedian] }}} ]}
      });
      res.send(data);
    }

    // query with just a venue
    else if( req.query.venue && !req.query.comedian ){
        data = await Shows.findAll({
        attributes:['document'],
        where:{ venue:venue}
      });
      res.send(data);
    }

    // query with just a comedian
    else if( !req.query.venue && req.query.comedian ){
        data = await Shows.findAll({
        attributes:['document'],
        where:{ document:{ [Op.contains]:{ lineup:[comedian] }}}
      });
      res.send(data);
    }
  }
  catch(error){
    res.json({ error: error.message });
  }
});

module.exports = router;