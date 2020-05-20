var Sequelize = require('sequelize');
 var db = new Sequelize('postgres://postgres@localhost:5432/wiki', {logging: false
});
 module.exports= db