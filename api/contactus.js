const nodeMailer = require("nodemailer");
const mailconfig = require('../mailconfig'); 
let transport = nodeMailer.createTransport(mailconfig.mailtrap); 
let ejs = require("ejs");

const mailTemplateAdmin = "./templates/mails/contactus_admin.ejs";
const mailTemplateUser = "./templates/mails/contactus_user.ejs";

module.exports = (app, db) => {
    app.post('/contactus', function (req, res) {
		 
		const {firstname, lastname, emailadd, subject, messagetxt} = req.body;		
		const userData = {firstname:firstname, lastname:lastname, email:emailadd, subject:subject, message:messagetxt};
		const uname = (lastname) ? firstname + " " + lastname : firstname;
			
		//* Mail To Admin *//       
        ejs.renderFile(mailTemplateAdmin, userData, (err, strMsg) => {
			if(!err){
				const mailOptionAdmin = {
					from: '"My Blog" <info@myblog.com>',
					to: 'pkumar5330@gmail.com',
					subject: 'My Blog Contact Us ' + uname , 
					html: strMsg,
				};
				transport.sendMail(mailOptionAdmin, function(err, info) {
					if(err){
						//console.log(err);
						res.json({
							error:true, 
							message:'Something went wrong while sending mail to admin.' 
						});                 
					} 
					else {
						//* Mail To User: START *//        
						ejs.renderFile(mailTemplateUser, userData, (err, strMsg) => {
							if(!err){
								const mailOptionUser = {
									from: '"My Blog" <info@myblog.com>',
									to: emailadd,      
									subject: "Thanks for Contacting My Blog", 
									html: strMsg,
								};	
								transport.sendMail(mailOptionUser, function(err, info) {
									if(err) {
										res.json({
											error:true, 
											message:'Something went wrong while sending mail to user.' 
										});             
									} 
									else {
										res.json({
											error:false, 
											message:'Thank you for contact us. A Mail has been sent successfully.' 
										});
									}
								}); 
							} 
							else {
								res.json({
									error:true, 
									//message:err, 
									message:'Something went wrong in user template.', 
								});
							}
						});
						//END 
					} 
				}); 
			} 
			else {
				//console.log(err);
				res.json({
					error:true, 
					message:'Something went wrong in admin template.' 
				});
			}
		}); 
    });
}