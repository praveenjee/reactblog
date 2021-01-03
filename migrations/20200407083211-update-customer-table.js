'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
	return queryInterface.sequelize.transaction((t) => {
		return Promise.all([
			queryInterface.addColumn('Customers', 'gender', {
				type: Sequelize.STRING
			},
			{after: 'phone'}, 
			{ transaction: t }),
			queryInterface.addColumn('Customers', 'address', {
				type: Sequelize.STRING,
			},
			{after: 'gender'}, 
			{ transaction: t })
		])
	})
	
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
	return queryInterface.sequelize.transaction((t) => {
		return Promise.all([
			queryInterface.removeColumn('Customers', 'gender', { transaction: t }),
			queryInterface.removeColumn('Customers', 'address', { transaction: t })
		])
	})	
  }
};
