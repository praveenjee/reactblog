# reactblog
Author: Praveen Kumar
Created On: April 2020
This project illustrats the following
	1.) How to create api in nodejs.
	2.) Create connection with Mysql Database through Sequelize.
	2.) How to use Sequelize ORM with nodejs for create API.
	3.) Create Migration file to getnerate tables.
	4.) How to create seeders and use it to dump data in table. 
	5.) Create models and its definitions.
	6.) How to create associations in Sequelize( nodejs )
	7.) List of Sequelize-CLI commands to create migrations and seeders
	etc.
	
##Sequelize Cli Commands
npx sequelize-cli model:generate --name Customer --attributes firstName:string,lastName:string,email:string,phone:string

npx sequelize-cli migration:generate --name create-customer-table
npx sequelize-cli migration:generate --name update-customer-table
npx sequelize-cli migration:generate --name create-user-table
npx sequelize-cli migration:generate --name create-post-table
npx sequelize-cli migration:generate --name create-country-table
npx sequelize-cli migration:generate --name create-category-table

npx sequelize-cli seed:generate --name demo-customer-table 
npx sequelize-cli seed:generate --name demo-user-table 
npx sequelize-cli seed:generate --name demo-post-table
npx sequelize-cli seed:generate --name demo-country-table
npx sequelize-cli seed:generate --name demo-category-table

npx sequelize-cli init


##Migrate all table file
npx sequelize-cli db:migrate

##This command will revert most recent migration.
npx sequelize-cli db:migrate:undo 

##Undo migrate particular table file
npx sequelize-cli db:migrate:undo:all --to 20200407075249-create-customer-table.js

##Undo migrate all table file
npx sequelize-cli db:migrate:undo:all  


##If you want to seeds all at a time:
npx sequelize-cli db:seed:all 

##If you wish to seed a specific file:
npx sequelize-cli db:seed --seed 20200422084857-demo-country-table.js
npx sequelize-cli db:seed --seed 20200524083019-demo-category-table.js

##If you wish to undo the most recent seed:
npx sequelize-cli db:seed:undo

##If you wish to undo a specific seed:
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

##Some Refrences
https://sequelize.org/v5/manual/transactions.html
https://sequelize.org/master/manual/transactions.html
	