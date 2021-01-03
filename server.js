//const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const db = require("./models");
const qs = require('querystring'); 

const apiUser = require("./api/user");
const apiPost = require("./api/post");
const apiCoutnrty = require("./api/country");
const apiContactUs = require("./api/contactus");
const apiProfile = require("./api/profile");

const app = express();
const port = 8001;

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 

//public folder path where public assets live in 
app.use(express.static(path.join(__dirname, 'client/public')));

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');  
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-auth-token");
  next();
});

/* var server = http.createServer(app).listen(port, function(){
  console.log("Express server listening on port 4004 ");
}); */

db.sequelize.sync()
.then(() => {
	console.log('Database connected!');
	app.listen(port, function() {
		console.log('Express Server is running on port ' + port);
	});
});

apiUser(app, db); 
apiPost(app, db); 
apiCoutnrty(app, db); 
apiContactUs(app, db); 
apiProfile(app, db); 