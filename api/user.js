const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodeMailer = require("nodemailer");
let ejs = require("ejs");

const jwtSecret = 'MYBLOG_JWT';
const auth = require('../middleware/auth'); 
const tokenLife = '9h';

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

	//User Login
	app.post("/userlogin", (req, res) => {
		db.User.findOne({ where: { email:req.body.username, status:'1' } })
		.then(myresult => {							
			if(myresult && bcrypt.compareSync(req.body.upassword, myresult.password)){  
				res.status(201).json({
					token : jwt.sign({ data:myresult, error: false}, jwtSecret, {expiresIn:tokenLife}),
				})
			} 
			else {
			   res.status(201).json({ error: "Email and password does not match"});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Some error occurred."
			});
		})
	});
	
	//User Signup
	app.post("/usersignup", (req, res) => {
		db.User.findOne({ where: { email:req.body.useremail } })
		.then(result => {
			if(result) {
				res.status(201).json({
					error: true,
					message: 'Email address already exits. Try again!'
				})
			}
			else {
				const vtoken = getToken(8);
				db.User.create({
					email: req.body.useremail,
					password: bcrypt.hashSync(req.body.userpassword, 10),
					phone: req.body.userphone,					
					status: '0',
					verify_token: vtoken
				})
				.then(fresult => {
					/**SEND MAIL TO USER ABOUT ACCOUNT CREATION**/
					const register_tpl = "./templates/mails/register.ejs";
					let encdata = 'vtoken=' + vtoken + "&email=" + req.body.useremail;
					let buff =  Buffer.from(encdata);
					let encodedata = buff.toString('base64');					
					
					ejs.renderFile(register_tpl, {data:encodedata}, (err, strMsg) => {
						if(!err){
							const mailOption = {
								from: '"My Blog" <info@myblog.com>',
								to: fresult.email,
								subject: "Verification Email | My Blog",
								html: strMsg,
							};
							transport.sendMail(mailOption, function(error, info) {
								if (!error) {
									return res.status(201).json({ 	
										error: false,
										data: fresult,
										message: 'User added successfully.' 
									}); 								
								}
								else{
									return res.status(201).json({ 	
										error: false,
										message: 'Something went wrong, please try again.' 
									});
								}							
							});
						}						
					})
				})
				.catch(err => {
					res.status(500).send({
						message: err.message || "Some error occurred while creating the user."
					});
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Some error occurred."
			});
		})
	});
	
	app.post("/verifyemail", (req, res) => {
		console.log(res.body);
		if(req.body.stoken === '' || req.body.stoken === null){
			res.status(201).send({
				error: true,
				message: "Verify token is missing or you entered a wrong url."
			});
		}
		
		let buff = new Buffer(req.body.stoken, 'base64');
		let mydata = buff.toString('ascii');
		var myarray = mydata.split("&");
		
		var vtoken = myarray[0].split("="),
		vemail = myarray[1].split("=");
		
		var stoken = vtoken[1],
		email = vemail[1];		
		
		db.User.findOne({ where: { verify_token:stoken, email:email } })
		.then(result => {
			if(result !== null){
				if(result.status === '0'){
					var verifyDate = new Date();
					verifyDate = verifyDate.toISOString();	
						
					db.User.update({ verify_date: verifyDate, status: '1' }, { where:{ id:result.id } })
					.then(vresult => {
						res.status(201).send({
							error: false,
							message: "Your account is now activated. Please login to continue. !!"
						});
					})
				} 
				else {
					if(result.status === '1'){
						res.status(201).send({
							error: false,
							message: "Your account is already activated. Please login to continue. !!"
						});	
					}
				}
			} 			
			else {
				res.status(201).send({
					error: true,
					message: "Entered wrong url or verify token is missing or user does not exits."
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
	
	app.post("/sendresetpasswordlink", (req, res) => {
		db.User.findOne({ where: { email:req.body.uemail } })
		.then(result => {
			if(result !== null){
				/**SEND MAIL TO USER FOR RESET PASSWORD**/
				let token = Math.random().toString(36).substring(8);
				var forgotTime = new Date();
				forgotTime = forgotTime.toISOString();
				
				var userid = result.id;
				db.User.update({verify_token:token, forgot_at:forgotTime}, {where: {id: userid }});	
				
				let endata = 'userid=' + userid + "&token=" + token + "&time=" + forgotTime;
				let buff =  Buffer.from(endata);
				let encodedata = buff.toString('base64');
							
				const resetpassword_tpl = "./templates/mails/resetpassword.ejs";
				ejs.renderFile(resetpassword_tpl, {encodedata:encodedata}, (err, strMsg) => {
					if(!err){
						const mailOption = {
							from: '"My Blog" <info@myblog.com>',
							to: result.email,
							subject: "Reset your password | My Blog",
							html: strMsg,
						};
						transport.sendMail(mailOption, function(error, info) {
							if (!error) {
								return res.status(201).json({ 	
									error: false,
									data: result,
									message: 'Reset password mail has been sent to your registered email address. Thank you!' 
								}); 								
							}
							else{
								return res.status(201).json({ 	
									error: false,
									message: 'Getting some issue in sending mail. Try after some time.' 
								});
							}							
						});
					}
				})
			}
			else {
				res.status(201).send({
					error: true,
					message: "Entered wrong email address or not registered with us!"
				});
			}
		})
		.catch(error => {
			res.status(500).send({
				error: true,
				message: error.message || "Some error occurred."
			});
		})
	});
	
	app.post("/verifyresetpasswordlink", (req, res) => {
		var encdata = req.body.encdata;
		
		let buff = new Buffer(encdata, 'base64');
		let mydata = buff.toString('ascii');
		var myarray = mydata.split("&");
		
		var userid = myarray[0].split("="),
		token = myarray[1].split("="),
		fordate = myarray[2].split("="),
		_uid  = userid[1],	
		_fordate = fordate[1],
		_token = token[1];
				
		var current_date = new Date();
		var forget_date = new Date(_fordate);
		console.log("Before: ", forget_date);
		
		//Added 1 hour to forgot_date
		var expire_date = new Date(forget_date.setHours(forget_date.getHours()+1)); 		
		console.log("After: ", expire_date);
		console.log("Current: ", current_date);		
		
		//Note: Activation link will expired in 1 hr (60 minutes) 
		db.User.findOne({ where: { id:_uid, verify_token:_token } })
		.then(result => {
			if(result !== null){
				if(current_date >= expire_date){
					res.status(201).send({
						error: true,
						message: "Your activation link is expired now!"
					});
				} 
				else {
					res.status(201).send({
						error: false,
						message: "OK",
						data: {id: result.id, email: result.email},
						expire: expire_date
					});
				}
			}
			else {
				res.status(201).send({
					error: true,
					message: "You are not a valid user or may be your token is expired!"
				});
			}
		})
		.catch(error => {
			res.status(500).send({
				error: true,
				message: error.message || "Some error occurred."
			});
		})		
	});
	
	//Change user password
	app.post("/resetpassword", (req, res, next) => { 
		//console.log(req.body);
		let buff = new Buffer(req.body.encdata, 'base64');
		let mydata = buff.toString('ascii');
		var myarray = mydata.split("&");
		
		var userid = myarray[0].split("="),
		token = myarray[1].split("="),
		fordate = myarray[2].split("="),
		_uid  = userid[1],	
		_fordate = fordate[1],
		_token = token[1];
		
		db.User.findOne({where:{status: '1', id:_uid}})
		.then(result => {
			if(result){
				db.User.update({
					verify_token: getToken(8), 
					password: bcrypt.hashSync(req.body.newpassword, 10)}, { where: { id:result.id } 
				})
				.then(uresult => {
					res.status(201).json({ 
						error: false, 
						message: "Password reset successfully! Go to login page." 
					});
				})
			}
			else {
				res.status(201).json({ 
					error: true, 
					message: "Password not reset!" 
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