const users = 
[
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
		"email" : "Manish.mishra@orbitpad.com",
		"phone" : "9999253896",
		"password" : "1234560",
		"gender" : "Male",
		"address" : "Noida",
		"bio" : "Manish Mishra biography",
		"status" : "1",
		"created_at" : "2020-04-05 17:51:20",
		"updated_at" : "2020-04-05 17:51:20",
	}
];

const posts = 
[
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
];

exports.users = users;
exports.posts = posts;
