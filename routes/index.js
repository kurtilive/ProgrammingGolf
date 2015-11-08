var express = require('express');
var router = express.Router();

var tasks = [
  { id: 1, href: '/task/1', title: 'Test task title with c language', author: 'Alex'},
  { id: 2, href: '/task/2', title: 'Test task title with c++ language', author: 'Ivan'}];
/* GET home page. */
router.get('/', function(req, res, next)
{

  res.render('index', { title: 'Golf Programming',
                        tasks: tasks});
});


router.get('/task/:id', function(req, res, next)
{
    for (var i = 0; i < tasks.length; i++)
    {
       if (tasks[i].id == req.params.id)
       {
         res.render('index', { title: tasks[i].title, tasks: tasks});
         return;
       }
    }

});





module.exports = router;
