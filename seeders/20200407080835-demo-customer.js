'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {	
	return queryInterface.bulkInsert('customers', [
		{
			first_name: 'John',
			last_name: 'Doe',
			email: 'johndoe@gmail.com',
			phone: '9999253895',
			gender: 'Male',
			address: 'Delhi-45',
			created_at: '2020-04-07 10:50:12'
		},
		{
			first_name: 'Praveen',
			last_name: 'Kumar',
			email: 'praveen.kumar@gmail.com',
			phone: '9999253896',
			gender: 'Male',
			address: 'Delhi-92',			
			created_at: '2020-04-07 10:50:12'	
		}
	]);    
  },

  down: (queryInterface, Sequelize) => {    
	 return queryInterface.bulkDelete('customers', null, {});
  }
};
