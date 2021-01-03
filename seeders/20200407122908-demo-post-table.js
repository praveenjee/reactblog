'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
	return queryInterface.bulkInsert('posts', [
		{
			"title" : "A quick brown fox jumps over the lazy dog.",
			"slug" : "a-quick-brown-fox-jumps-over-the-lazy-dog",
			"description" : "A quick brown fox jumps over the lazy dog.",
			"status" : "1",		
			"created_at" : "2020-04-05 17:51:20",
			"user_id" : 1,
		},
		{
			"title" : "Hello One",
			"slug" : "hello-one",
			"description" : "Hello One",
			"status" : "1",		
			"created_at" : "2020-04-06 17:51:20",
			"user_id" : 1,
		},
		{
			"title" : "Hello Two",
			"slug" : "hello-two",
			"description" : "Hello Two",
			"status" : "1",		
			"created_at" : "2020-04-06 17:51:20",
			"user_id" : 2,
		}	
	]);
  },

  down: (queryInterface, Sequelize) => {
	return queryInterface.bulkDelete('posts', null, {});
  }
};
