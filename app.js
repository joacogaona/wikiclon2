'use strict';
var express = require('express');
var app = express();
var volleyball = require('volleyball');
var nunjucks = require('nunjucks');
const db = require('./db/index')
const routes = require('./routes/index')


const path = require ('path')

var bodyParser = require('body-parser');

app.engine('html', nunjucks.render); 
app.set('view engine', 'html'); 
nunjucks.configure('views', { noCache: true }); 

app.use(volleyball);
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

app.use('/', routes);

db.sync({force:true})
.then(()=>{

    app.listen(3000, function(){
        console.log('listening on port 3000');
      });
    
})
.catch(console.error);








