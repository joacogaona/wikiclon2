var Sequelize = require('sequelize');
 var db = new Sequelize('postgres://localhost:5432/wiki');

 module.exports= db