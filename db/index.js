var Sequelize = require('sequelize');
 var db = new Sequelize('postgres://postgres:brunoml07@localhost:5432/wiki', {logging: false
});
 module.exports= db