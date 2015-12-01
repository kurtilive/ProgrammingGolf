var express = require('express');
var router = express.Router();
var dataManager = require('../Database/DataManager');

/* GET langslisting. */
router.get('/', function(req, res, next) {
    dataManager.getAllProgramlangs(function(langs, error)
    {
        res.render('langs', { title: 'program_languages',
            langs: langs});
    });
});

// var auth = express.basicAuth(function(user, pass, next) {
//   var result = (user === 'testUser' && pass === 'testPass');
//   next(null, result);
// });


module.exports = router;






module.exports = router;