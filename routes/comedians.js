var express = require('express');
var router = express.Router();

const { Comedians } = require('../src/database');
const common = require('../public/javascripts/common');

/* GET list of Comedians based on location */
router.get('/', async function(req, res, next) {

  try{
    let location = req.query.location;

    const data = await Comedians.findAll({
      attributes:['document'],
      where:{ location:location }
    });

    data.forEach(element => {
      let dob = element.document.dob;
      let age = common.calculate_age(dob);

      element.document["age"] = age;
    });
    res.send(data);

  }
  catch(error){
    res.json({ error: error.message });
  }
});

module.exports = router;