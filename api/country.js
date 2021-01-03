const auth = require('../middleware/auth');

module.exports = (app, db) => {
	
	//Get all posts
	app.post("/fetchcountries", auth, (req, res, next) => {
		let keyword = (req.body.keyword) ? req.body.keyword : '';
		
		let wherecond = '';
		if(keyword !=='')
			wherecond = {country_name:{[db.op.like]: '%'+keyword+'%'} }
		else 
			wherecond = {country_name:{[db.op.ne]: null} }
	
		db.Country.findAll({where: wherecond}, {order: [['id', 'ASC']]})
		.then(result => {
			if(result){
				res.status(201).send({
					error: false,
					data: result,
					keyword: keyword
				});				
			} 
			else {
				res.status(201).send({
					error: true,
					message: "Record not found!",
					keyword: keyword
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