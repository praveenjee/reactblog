const express = require('express');
const Sequelize = require('sequelize');
const Data = require('./sampledata');

const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env]; 

const app = express();
const port = 8001;

var db = {};

const connection = new Sequelize(config.database, config.username, config.password, config);

connection
.authenticate()
.then(()=> {
	console.log('Connection established successfully!');
})
.catch(err => {
	console.log('Unable to connect to the database:', err);
})

connection
.sync({
	logging: console.log,
	force: true,
})
.then(()=> {
	console.log('Database connected!');
	app.listen(port, function() {
		console.log('Server is running on port ' + port);
	});	
})
.catch(err => {
	console.log('Unable to connect to the database:', err);
}) 

//1:1 relationship between tables(user & post)
User.hasOne(Post, {
	foreignKey: 'user_id'
}); 
 .then(() => {
	//console.log(data);
	User.bulkCreate(Data.users, {returning: true})
	.then(() => { console.log("\nUsers inserted successfully!") })
	.catch(error => { console.log(error) })
})
.then(() => {	
	Post.bulkCreate(Data.posts, {returning: true})
	.then(() => { console.log("Post inserted successfully!") })
	.catch(error => { console.log(error) })
}) 

