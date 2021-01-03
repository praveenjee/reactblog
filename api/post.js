const auth = require('../middleware/auth'); 
const path = require('path');
const fs = require('fs')
var multer = require('multer'); 
var imageFilter = require('../helpers/imageFilter'); 


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
	cb(null, 'client/public/uploads/')
	//cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
	var filName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
	cb(null, filName);
  }
});

var upload = multer({ storage: storage }).single('featureimage');


module.exports = (app, db) => { 

	//Get all post listing admin panel
	app.post("/fetchposts", auth, (req, res) => {
		let keyword = (req.body.keyword) ? req.body.keyword : '';
		
		let wherecond = '';
		if(keyword !=='')
			wherecond = {title: {[db.op.like]: '%'+keyword+'%'} }
		else 
			wherecond = {title: {[db.op.ne]: null} }
	
		db.Post.findAll({where: wherecond}, {order: [['id', 'ASC']]})
		.then(result => {
			if(result){
				res.status(201).send({
					error: false,
					data: result,
				});					
			} 
			else{				
				res.status(201).send({
					error: true,
					message: "Record not found!",
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
		
	//Save post
	app.post("/savepost", auth, upload, (req, res, next) => {
		//console.log(req.body);
		//console.log(req.file);
		let featureImage = req.file ? (req.file.filename) : '750x300.png';
		
		db.Post.findOne({ where: { title:req.body.title, slug: req.body.slug } })
		.then(result => {
			if(result) {
				res.status(201).json({
					error: true,
					message: 'Post already exits. Please try again!'
				})
			}
			else {				
				db.Post.create({
					title: req.body.title,
					slug: req.body.slug,
					category: req.body.category,
					profilename: req.body.profilename,					
					status: (req.body.status === '1') ? '1' : '0',
					short_description: req.body.short_description,
					description: req.body.description,
					user_id: '1',
					imagepath: featureImage,
					meta_title: req.body.meta_title,
					meta_keywords: req.body.meta_keywords,
					meta_description: req.body.meta_description,
					created_at: new Date().toISOString().slice(0,10)
				})
				.then(presult => {
					if (presult) {												
						var wherecond = {title: {[db.op.ne]: null} }
						db.Post.findAll({where: wherecond}, {order: [['id', 'ASC']]})
						.then(fresult => {
							if(fresult){
								res.status(201).send({
									error: false,
									data: fresult,
									message: 'Post added successfully.' 
								});					
							} 			
						})							
					}
					else{
						res.status(201).json({ 	
							error: false,
							message: 'Post not added. Please try again.' 
						});
					}	
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
	
	//Update post
	app.post("/updatepost", auth, upload, (req, res, next) => {
		//console.log(req.body);
		//console.log(req.file);		
		//let featureImage = req.file ? (req.file.filename) : '750x300.png';
		let featureImage = req.file ? (req.file.filename) : null;
		let postid = req.body.id;
		
		db.Post.findOne({ where: { id: postid } })
		.then(result => { 
			if(result) {
				let oldFeatureImage = result.imagepath;
				let fpath = "./client/public/uploads/" + oldFeatureImage;
				if(featureImage != null && oldFeatureImage != '750x300.png'){
					try {						
						fs.unlinkSync(fpath)
						console.log("Previous image deleted successfully.");
					} catch(err) {
						console.error(err)
					}
				}
				
				db.Post.update(
				{
					title: req.body.title,
					slug: req.body.slug,
					category: req.body.category,
					short_description: req.body.short_description,
					description: req.body.description,
					status: (req.body.status === '1') ? '1' : '0',
					profilename: req.body.profilename,
					meta_title: req.body.meta_title,
					meta_keywords: req.body.meta_keywords,
					meta_description: req.body.meta_description,
					imagepath: (featureImage != null) ? featureImage : oldFeatureImage,
					updated_at: new Date().toISOString().slice(0,10),
				},
				{ where: { id:result.id } })
				.then(uresult => {
					if(uresult){						
						db.Post.findOne({
							where: { id: postid }, 
							attributes: ['title', 'slug', 'category', 'status', 'user_id', 'profilename', 'meta_title', 'meta_keywords', 'meta_description', 'imagepath', 'short_description', 'description', 'created_at', 'updated_at']
						})
						.then(fresult => {
							res.status(201).json({
								error: false,
								data: fresult,
								message: 'Profile updated successfully.'
							})
						})
					} 
					else {
						res.status(201).json({ 	
							error: false,
							message: 'Post not updated!' 
						});
					}
				})
			}
			else {				
				res.status(404).json({ 	
					error: true,
					message: 'Post not found!' 
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Some error occurred."
			});
		})
	});
	
	//Get post detail by its id
	app.get("/getpostbyid/:id", auth, (req, res) => {
		db.Post.findOne({ where:{id: req.params.id} })
		.then(result => {
			if(result){
				res.status(201).send({
					error: false,
					data: result
				});					
			} 
			else{				
				res.status(404).send({
					error: true,
					message: "Post not found."
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
	
	//Get post detail by its slug
	app.get("/getpostbyslug/:slug", (req, res) => {
		db.Post.findOne({ where:{slug: req.params.slug} })
		.then(result => {
			if(result){
				res.status(201).send({
					error: false,
					data: result
				});					
			} 
			else{				
				res.status(404).send({
					error: true,
					message: "Post not found."
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
	
	//Remove post by its id
	app.post("/deletepost", auth, (req, res) => {
		//console.log(req.body);
		db.Post.findOne({ where:{id: req.body.postid} })
		.then(result => {
			if(result){
				let oldFeatureImage = result.imagepath;
				let fpath = "./client/public/uploads/" + oldFeatureImage;
				if(oldFeatureImage != '750x300.png'){
					try {						
						fs.unlinkSync(fpath)
						console.log("Post image deleted successfully.");
					} catch(err) {
						console.error(err)
					}
				}
				
				db.Post.destroy({ where:{id: result.id} })
				.then(deresult => {
					if(deresult){
						var wherecond = {title: {[db.op.ne]: null} }
						db.Post.findAll({where: wherecond}, {order: [['id', 'ASC']]})
						.then(fresult => {
							if(fresult){
								res.status(201).send({
									error: false,
									data: fresult,
									message: "Post deleted successfully."
								});					
							} 			
						})
					}
					else {
						res.status(201).send({
							error: false,
							message: "Post not deleted!"
						});
					}
				})
			} 
			else{				
				res.status(404).send({
					error: true,
					message: "Post not found!"
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
	
	//Get all posts on home page
	app.get("/getallposts/:pageno", (req, res) => {	
		let page = req.params.pageno;
		let limit = 3;
		let offset = (page - 1) * limit;
		
		db.sequelize.query("SELECT * FROM posts WHERE status = $status ORDER BY id DESC LIMIT $offset, $limit", 
		{ bind: {status: '1', offset: offset, limit: limit} })
		.then(([results, metadata]) => {
		
			if(results){
				/* db.Post.findAll({ 
					attributes: [[db.sequelize.fn('COUNT', db.sequelize.col('id')), 'total']],
					where: { status: '1' } 
				}) */
				db.Post.findAll({ where: { status: '1' } })				
				.then(totresult=> {
					res.status(201).send({
						error: false,
						items: results,
						total: totresult.length
					});	
				})
			} 
			else{				
				res.status(201).send({
					error: true,
					message: "Record not found!",
					total: 0
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
	
	//Get all cateogry posts on category page
	app.get("/getAllCategoryPosts/:category/:pageno", (req, res) => {
		let category = req.params.category;	
		let page = req.params.pageno;
		let limit = 3;
		let offset = (page - 1) * limit;
		
		db.sequelize.query("SELECT * FROM posts WHERE status = $status AND category = $category ORDER BY id DESC LIMIT $offset, $limit", 
		{ bind: {status: '1', category: category, offset: offset, limit: limit} })
		.then(([results, metadata]) => {
		
			if(results){
				/* db.Post.findAll({ 
					attributes: [[db.sequelize.fn('COUNT', db.sequelize.col('id')), 'total']],
					where: { status: '1' } 
				}) */
				db.Post.findAll({ where: { status: '1', category: category } })				
				.then(totresult=> {
					res.status(201).send({
						error: false,
						items: results,
						total: totresult.length,
						catname: category
					});	
				})
			} 
			else{				
				res.status(201).send({
					error: true,
					message: "Record not found!",
					total: 0,
					catname: category
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
	
	/*Get other infor on dashbaord page*/
	app.post("/fetchotherinfo", auth, async (req, res) => {
		const post = await db.Post.count({ attributes: [[db.sequelize.fn('COUNT', db.sequelize.col('id')), 'total']], where: { status: '1' } }); 
		const country = await db.Country.count({ attributes: [[db.sequelize.fn('COUNT', db.sequelize.col('id')), 'total']] }); 
		
		if(post == 0 && country == 0){
			res.status(201).send({
				error: true,
				data:{npost:post, ncountry:country}
			}); 
		} 
		else {
			res.status(201).send({
				error: false,
				data:{npost:post, ncountry:country}
			}); 
		}
	});	
	
	//global search in right panel
	app.get("/searchpost/:keyword/:pageno", (req, res) => {
		let keyword = (req.params.keyword) ? req.params.keyword : '';
		let page = req.params.pageno; //console.log(keyword, page);
		let limit = 3;
		let offset = (page - 1) * limit;
		
		/* let wherecond = '';
		if(keyword !=='')
			wherecond = {title: {[db.op.like]: '%'+keyword+'%'} }
		else 
			wherecond = {title: {[db.op.ne]: null} }
		db.Post.findAll({where: wherecond}, {offset: offset, limit: limit}, {order: [['id', 'ASC']]}) */
		
		//All result find here
		db.sequelize.query(`SELECT * FROM posts WHERE status = '1' AND (title LIKE '%${keyword}%' OR short_description LIKE '%${keyword}%' OR description LIKE '%${keyword}%' OR meta_title LIKE '%${keyword}%' OR meta_keywords LIKE '%${keyword}%' OR meta_description LIKE '%${keyword}%') ORDER BY id DESC LIMIT ${offset}, ${limit}`, { type: db.sequelize.QueryTypes.SELECT})
		.then(myResults => {
			//console.log(myResults.length);
			
			if(myResults.length > 0){
				//Total Query	
				db.sequelize.query(`SELECT * FROM posts WHERE status = '1' AND (title LIKE '%${keyword}%' OR short_description LIKE '%${keyword}%' OR description LIKE '%${keyword}%' OR meta_title LIKE '%${keyword}%' OR meta_keywords LIKE '%${keyword}%' OR meta_description LIKE '%${keyword}%') ORDER BY id DESC`, { type: db.sequelize.QueryTypes.SELECT})
				.then(totresults => {
					res.status(201).send({
						error: false,
						data: myResults,
						total: totresults.length,
						searchkey: keyword
					});
				})					
			} 
			else{				
				res.status(201).send({
					error: true,
					data: myResults,
					total: 0,
					searchkey: keyword
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