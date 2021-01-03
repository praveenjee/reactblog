'use strict';
const categoryList = require(__dirname + '/categories.json'); 
//console.log(categoryList);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', categoryList);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
