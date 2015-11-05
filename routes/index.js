var express = require('express');
var router = express.Router();

var tasks = [
  { id: 1, title: 'Test task title with c language', lang: 'c'},
  { id: 2, title: 'Test task title with c++ language', lang: 'c++'}];
/* GET home page. */
router.get('/', function(req, res, next)
{

  res.render('index', { title: 'Golf Programming',
                        tasks: tasks});
});

router.get('/:id', function(req, res, next)
{
for (var i = 0; i < tasks.length; i++)
{
   if (tasks[i].id == req.params.id)
   {
     res.render('index', { title: tasks[i].title, tasks: tasks});
     break;
   }


}

});


module.exports = router;
