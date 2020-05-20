var express = require('express');
var router = express.Router();
const {Page}=require('../models/index')


router.get('/', function(req, res, next) {
  res.redirect('/');
});
router.post('/', function(req, res, next) {
  res.json(req.body)
});


router.get('/add', function(req, res) {
  res.render('addpage');
});

router.post('/add', function(req, res, next) {
  Page.create({
    title: req.body.title,
    content: req.body.content,
    status:req.body.status
  })
  .then((data)=>{
    res.json(data)
  })
})

  module.exports = router
