var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(process.env.SLACK_TEST);
});

module.exports = router;
