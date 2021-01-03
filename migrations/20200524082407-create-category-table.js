'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Categories', {
		id: {
		  type: Sequelize.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
		},
		name: {
		  type: Sequelize.STRING,
		  allowNull: false,
		  unique: true
		},
		slug: {
		  type: Sequelize.STRING,
		  allowNull: false,
		  unique: true
		},
		status: {
		  type: Sequelize.ENUM('0', '1'),
		  defaultValue: '0',
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
