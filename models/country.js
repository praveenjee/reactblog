module.exports = (sequelize, DataTypes) => {
	//Define post schema here
	const Country = sequelize.define('Country', {
		id: {
		  type: DataTypes.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
		},
		country_code: {
		  type: DataTypes.STRING,
		  allowNull: false,
		  unique: true
		},
		country_name: {
		  type: DataTypes.STRING,
		  allowNull: false,
		},
		code: {
		  type: DataTypes.STRING,
		  allowNull: true,
		},
		createdAt: {
		  type: DataTypes.DATE,
		  allowNull: true,
		  field: 'created_at',
		  defaultValue: sequelize.fn('NOW'),
		},
		updatedAt: {
		  type: DataTypes.DATE,
		  allowNull: true,
		  field: 'updated_at',
		  defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
		},	  
	},
	{ timestamps: false });

	return Country;
}