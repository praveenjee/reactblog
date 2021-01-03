'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
		id: {
		  type: Sequelize.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
		},
		title: {
		  type: Sequelize.STRING,
		  allowNull: false,
		},
		slug: {
		  type: Sequelize.STRING,
		  allowNull: false,
		},
		category: {
		  type: Sequelize.STRING,
		  allowNull: true,
		}
		short_description: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		description: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		status: {
		  type: Sequelize.ENUM('0', '1'),
		  defaultValue: '0',
		},
		user_id: {
			type: Sequelize.INTEGER,
		},
		profilename: {
		  type: DataTypes.STRING,
		  allowNull: true,
		},
		imagepath: {
		  type: DataTypes.STRING,
		  allowNull: true,
		},
		meta_title: {
		  type: DataTypes.STRING,
		  allowNull: true,
		},
		meta_keywords: {
		  type: DataTypes.STRING,
		  allowNull: true,
		},
		meta_description: {
		  type: DataTypes.STRING,
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
    return queryInterface.dropTable('posts');
  }
};
