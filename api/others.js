const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodeMailer = require("nodemailer");
let ejs = require("ejs");

const jwtSecret = 'MYBLOG_JWT';
const auth = require('../middleware/auth'); 

const mailconfig = require('../mailconfig'); 
let transport = nodeMailer.createTransport(mailconfig.mailtrap); 

module.exports = (app, db) => {
	//Get all users
	app.get("/users", (req, res) => {
		db.User.findAll({where:{status: '1'}, order: [['id', 'ASC']]})
		.then(result => {
			if(result){
				res.json(result);				
			} else{				
				res.send({ error: "No Users Found", logstatus: "failed"});
			}			
		})
	});
	
	//RAW QUERIES
	app.get("/rawqueries", (req, res) => {
		db.sequelize.query("SELECT * FROM users WHERE status='1' ORDER BY id ASC")
		.then(([results, metadata]) => {
			if(results){
				res.json(results);				
			} else{				
				res.send({ error: "No Users Found", logstatus: "failed"});
			}			
		})
	});
	
	//Bind Parameter as an array in Query
	app.get("/rawqueries2", (req, res) => {
		db.sequelize.query("SELECT * FROM users WHERE status = $1 ORDER BY id ASC", 
		{ bind: ['1'] })
		.then(([results, metadata]) => {
			if(results){
				res.json(results);				
			} else{				
				res.send({ error: "No Users Found", logstatus: "failed"});
			}			
		})
	});
	
	//Bind Parameter as an object in Query
	app.get("/rawqueries3", (req, res) => {
		db.sequelize.query("SELECT * FROM users WHERE status = $status ORDER BY id ASC", 
		{ bind: {status: '1'} })
		.then(([results, metadata]) => {
			if(results){
				res.json(results);				
			} else{				
				res.send({ error: "No Users Found", logstatus: "failed"});
			}			
		})
	});
	
	//Replacements (If an array is passed, ? will be replaced in the order that they appear in the array)
	app.get("/rawqueries4", (req, res) => {
		db.sequelize.query("SELECT * FROM users WHERE status = ? ORDER BY id ASC", 
		{ replacements: ['1'] })
		.then(([results, metadata]) => {
			if(results){
				res.json(results);				
			} else{				
				res.send({ error: "No Users Found", logstatus: "failed"});
			}			
		})
	});
	
	//Replacements (If an object is passed, :key will be replaced with the keys from that object.)
	app.get("/rawqueries5", (req, res) => {
		db.sequelize.query("SELECT * FROM users WHERE status = :status ORDER BY id ASC", 
		{ replacements: {status: '1'} })
		.then(([results, metadata]) => {
			if(results){
				res.json(results);				
			} else{				
				res.send({ error: "No Users Found", logstatus: "failed"});
			}			
		})
	});
}