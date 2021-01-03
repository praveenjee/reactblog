'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const Data = require(__dirname + '/../sampledata');

var basename  = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env]; 
var db  = {};

//Create sequelize connection as an object here
const sequelize = new Sequelize(config.database, config.username, config.password, config);

//Read directory `models` & save each file as a single model in variable(db)
fs.readdirSync(__dirname)
.filter(file => {
	return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
	var model = sequelize['import'](path.join(__dirname, file));
	db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
//End

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.op = Sequelize.Op;
module.exports = db;