var express = require('express');
var router = express.Router();
var util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log(JSON.colorStringify(req.body, null, 4));
  res.send('success');
});

module.exports = router;
