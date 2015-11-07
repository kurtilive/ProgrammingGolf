var express = require('express');
var router = express.Router();

// router.use(function(req, res, next) {
//   console.log('Alex: %s %s %s', req.method, req.url, req.path);
//   next();
// });
//
// // this will only be invoked if the path starts with /bar from the mount point
// router.use('/bar', function(req, res, next) {
//   console.log('Alex hi /bar');
//   next();
// });
//
// // always invoked
// router.use(function(req, res, next) {
//   res.send('Hello World');
// });

var tasks = [
  { id: 1, title: 'Test task title with c language', author: 'Alex'},
  { id: 2, title: 'Test task title with c++ language', author: 'Ivan'}];
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
