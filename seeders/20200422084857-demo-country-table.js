'use strict';
const countryList = require(__dirname + '/countrylist.json'); 
//console.log(countryList);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('countries', countryList);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('countries', null, {});
  }
};
