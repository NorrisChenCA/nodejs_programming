var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Handlebar Title', condition: false, anyArray: [1, 2, 3] });
});

router.get('/test/:id/:params2', function(req, res, next){
  console.log('test params:', req.params);
  res.render('test', {output: req.params.id, params2: req.params.params2});
});

router.post('/test/submit', function(req, res, next) {
  var id = req.body.id
  res.redirect('/test/' + id + '/abc');
});
module.exports = router;
