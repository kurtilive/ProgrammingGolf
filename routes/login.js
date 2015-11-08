var express = require('express');
var router = express.Router();

/* GET sign in page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // return;
  // res.render('login', { title: 'Golf Programming'});
});

module.exports = router;
