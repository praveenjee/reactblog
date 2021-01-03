'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
		{
			"name" : "Praveen Kumar",
			"email" : "praveen.kumar@orbitpad.com",
			"phone" : "9999253895",
			"password" : "1234567",
			"gender" : "Male",
			"address" : "Delhi",
			"bio" : "Praveen kumar biography",
			"status" : "1",
			"created_at" : "2020-04-05 17:51:20",
			"updated_at" : "2020-04-05 17:51:20"
		},
		{
			"name" : "Manish Mishra",
			"email" : "manish.mishra@orbitpad.com",
			"phone" : "9999253896",
			"password" : "1234560",
			"gender" : "Male",
			"address" : "Noida",
			"bio" : "Manish Mishra biography",
			"status" : "1",
			"created_at" : "2020-04-05 17:51:20",
			"updated_at" : "2020-04-05 17:51:20",
		},
		{
			"name" : "Arun Kumar",
			"email" : "arun.kumar@orbitpad.com",
			"phone" : "9999253897",
			"password" : "1234560",
			"gender" : "Male",
			"address" : "Noida",
			"bio" : "Arun Kumar biography",
			"status" : "1",
			"created_at" : "2020-04-10 13:51:20",
			"updated_at" : "2020-04-10 13:51:20",
		}	
	]);
  },

  down: (queryInterface, Sequelize) => { 
	return queryInterface.bulkDelete('users', null, {});
  }
};
