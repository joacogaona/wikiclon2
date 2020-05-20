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

router.get('/:urlTitle/delete', (req,res,next)=> {
  console.log(req.params.urlTitle)
  Page.destroy({
    where:{urlTitle:req.params.urlTitle}
  })
  .then(()=>{
    res.sendStatus(200)
  })


} )

router.get('/:urlTitle', function (req, res, next) {
  Page.findOne({ 
    where: { 
      urlTitle: req.params.urlTitle 
    } 
  })
  .then(function(foundPage){
    res.render("wikipage", { page: foundPage.dataValues });
  })
  .catch(next);
});




  module.exports = router
