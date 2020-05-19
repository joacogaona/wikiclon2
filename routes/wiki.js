var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.redirect('/');
});
router.post('/', function(req, res, next) {
  res.send('funcionó POST /wiki/');
});


router.get('/add', function(req, res) {
  res.render('addpage');
});



  module.exports = router
