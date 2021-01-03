'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
		id: {
		  type: Sequelize.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
		},
		firstname: {
			type: Sequelize.STRING(150),
			allowNull: true,
		},
		lastname: {
			type: Sequelize.STRING(150),
			allowNull: true,
		},
		email: {
		  type: Sequelize.STRING,
		  allowNull: false,
		  unique: true,
		  validate: {
			  isEmail: true
		  }
		},
		phone: {
		  type: Sequelize.STRING(10),
		  allowNull: false,
		},		
		address: {
		  type: Sequelize.STRING,
		  allowNull: true,
		},
		city: {
		  type: Sequelize.STRING(150),
		  allowNull: true,
		},
		state: {
		  type: Sequelize.STRING(150),
		  allowNull: true,
		},
		pincode: {
		  type: Sequelize.STRING(10),
		  allowNull: true,
		},
		password: {
		  type: Sequelize.STRING,
		  allowNull: false,
		},
		gender: Sequelize.ENUM('Male', 'Female'),
		biography: {
		  type: Sequelize.TEXT,
		  allowNull: true,
		},
		status: {
		  type: Sequelize.ENUM('0', '1'),
		  defaultValue: '0',
		},
		verify_token: {
		  type: Sequelize.STRING(100),
		  allowNull: true,
		},
		verify_date: {
		  type: Sequelize.DATE,
		  allowNull: true,
		},
		email_preference : {
		  type: Sequelize.ENUM('0', '1'),
		  allowNull: true,
		  defaultValue: '0',
		},
		sms_preference : {
		  type: Sequelize.ENUM('0', '1'),
		  allowNull: true,
		  defaultValue: '0',
		},
		whatsapp_preference : {
		  type: Sequelize.ENUM('0', '1'),
		  allowNull: true,
		  defaultValue: '0',
		},
		createdAt: {
		  type: Sequelize.DATE,
		  allowNull: true,
		  field: 'created_at',
		  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		updatedAt: {
		  type: Sequelize.DATE,
		  allowNull: true,
		  field: 'updated_at',
		  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
		},
		forgot_at: {
		  type: DataTypes.DATE,
		  allowNull: true,
		  field: 'forgot_at',
		},
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
