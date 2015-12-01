var express = require('express');
var router = express.Router();
var dataManager = require('../Database/DataManager');

/* GET users listing. */
router.get('/', function(req, res, next) {
  dataManager.getTop10Users(function(users, error)
  {
    res.render('users', { title: 'Users',
      users: users});
  });
});

// var auth = express.basicAuth(function(user, pass, next) {
//   var result = (user === 'testUser' && pass === 'testPass');
//   next(null, result);
// });


module.exports = router;






module.exports = router;