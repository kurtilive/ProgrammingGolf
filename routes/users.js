var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// var auth = express.basicAuth(function(user, pass, next) {
//   var result = (user === 'testUser' && pass === 'testPass');
//   next(null, result);
// });

module.exports = router;
