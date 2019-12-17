var express = require('express');
var router = express.Router();

const { Comedians } = require('../src/database')
const common = require('../public/javascripts/common');

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
    //calculate the comeidans age based on dob and patch the json respnse with it before sending
    if( data[0].document.dob ){
      let dob = data[0].document.dob;
      let age = common.calculate_age(dob);

      data[0].document["age"] = age;
    }

    res.send(data);
  } catch (error) {
    res.json({ error: error.message })
  }
});

module.exports = router;