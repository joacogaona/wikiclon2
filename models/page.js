const Sequelize = require('sequelize')
const db = require('../db/index')

class Page extends Sequelize.Model {}
Page.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
     allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
     allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
}
}, { sequelize:db, modelName: 'page' });

Page.beforeValidate((page) =>{
  function generateUrlTitle (title) {
    if (title) {
      return title.replace(/\s+/g, '_').replace(/\W/g, '');
    } else {
      return Math.random().toString(36).substring(2, 7);
    }
  }
  page.urlTitle=generateUrlTitle(page.title)
})
module.exports= Page