'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
	return queryInterface.createTable('Countries', {
		id: {
		  type: Sequelize.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
		},
		country_code: {
		  type: Sequelize.STRING,
		  allowNull: false,
		  unique: true
		},
		country_name: {
		  type: Sequelize.STRING,
		  allowNull: false,
		},
		code: {
		  type: Sequelize.STRING,
		  allowNull: true,
		},
		createdAt: {
		  type: Sequelize.DATE,
		  allowNull: true,
		  field: 'created_at',
		  defaultValue: Sequelize.fn('NOW'),
		},
		updatedAt: {
		  type: Sequelize.DATE,
		  allowNull: true,
		  field: 'updated_at',
		  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
		},
    });
  },

  down: (queryInterface, Sequelize) => {
	return queryInterface.dropTable('Countries');
  }
};
