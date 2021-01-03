const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodeMailer = require("nodemailer");
let ejs = require("ejs");

const jwtSecret = 'MYBLOG_JWT';
const auth = require('../middleware/auth');

const mailconfig = require('../mailconfig'); 
let transport = nodeMailer.createTransport(mailconfig.mailtrap); 


function getToken(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

module.exports = (app, db) => {
	
	//User User Profile
	app.post("/updateprofile", auth, (req, res, next) => {
		//console.log(req.body);
		db.User.update(
		{
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			gender: req.body.gender,
			phone: req.body.phone,
			address: req.body.address,
			city: req.body.city,
			state: req.body.state,
			pincode: req.body.pincode,
			biography: req.body.biography,
			sms_preference: req.body.sms_preference,
			email_preference: req.body.email_preference,
			whatsapp_preference: req.body.whatsapp_preference,
		},
		{ where: { email:req.body.email, id:req.user.id } })
		.then(myresult => {
			if(myresult) { 				
				db.User.findOne({
					where: {status: '1', id:req.user.id}, 
					attributes: ['address', 'biography', 'city', 'created_at', 'email', 'email_preference', 'firstname', 'gender', 'lastname', 'phone', 'pincode', 'sms_preference', 'state', 'updated_at', 'whatsapp_preference']
				})
				.then(result => {
						res.status(201).json({
						error: false,
						data: result,
						message: 'Profile has been updated successfully!'
					})
				})
			}
			else {
				res.status(201).json({
					error: true,
					message: 'Profile not updated!'
				})
			}
		})
		.catch(err => {
			res.status(500).send({
				error: true,
				message: err.message || "Some error occurred."
			});
		})
	});
	
	//Fetch account information
	app.get("/fetchaccountinfo", auth, (req, res, next) => {
		db.User.findOne({
			where: {status: '1', id:req.user.id}, 
			attributes: ['address', 'biography', 'city', 'created_at', 'email', 'email_preference', 'firstname', 'gender', 'lastname', 'phone', 'pincode', 'sms_preference', 'state', 'updated_at', 'whatsapp_preference']
		})
		.then(result => {
			if(result){
				res.status(201).json({
					error: false, 
					data: result, 
					message: "User found!"
				});					
			} else {				
				res.status(201).json({ 
					error: true, 
					message: "User has been deleted!" 
				});
			}			
		})
		.catch(err => {
			res.status(500).send({
				error: true,
				message: err.message || "Some error occurred."
			});
		})	
	});
	
	
	//Change user password
	app.post("/changepassword", auth, (req, res, next) => { 		
		db.User.findOne({where:{status: '1', id:req.user.id}})
		.then(result => {
			if(result && bcrypt.compareSync(req.body.currentpassword, result.password)){
				db.User.update({password: bcrypt.hashSync(req.body.newpassword, 10)}, { where: { id:req.user.id } })
				.then(uresult => {
					res.status(201).json({ 
						error: false, 
						message: "Password updated successfully!" 
					});
				})
			}
			else {
				res.status(201).json({ 
					error: true, 
					message: "Password not updated!" 
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				error: true,
				message: err.message || "Some error occurred."
			});
		})			
	});
}