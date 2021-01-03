module.exports = (sequelize, DataTypes) => {
	//Define user schema here
	const User = sequelize.define('User', {
		id: {
		  type: DataTypes.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
		},
		firstname: {
			type: DataTypes.STRING(150),
			allowNull: true,
		},
		lastname: {
			type: DataTypes.STRING(150),
			allowNull: true,
		},
		email: {
		  type: DataTypes.STRING,
		  allowNull: false,
		  unique: true,
		  validate: {
			  isEmail: true
		  }
		},
		phone: {
		  type: DataTypes.STRING(10),
		  allowNull: true,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		city: {
		  type: DataTypes.STRING(150),
		  allowNull: true,
		},
		state: {
		  type: DataTypes.STRING(150),
		  allowNull: true,
		},
		pincode: {
		  type: DataTypes.STRING(10),
		  allowNull: true,
		},
		password: {
		  type: DataTypes.STRING,
		  allowNull: false,
		},
		gender: DataTypes.ENUM('Male', 'Female'),
		biography: {
		  type: DataTypes.TEXT,
		  allowNull: true,
		},
		status: {
		  type: DataTypes.ENUM('0', '1'),
		  defaultValue: '0',
		},
		verify_token: {
		  type: DataTypes.STRING(100),
		  allowNull: true,
		},
		verify_date: {
		  type: DataTypes.DATE,
		  allowNull: true,
		},
		email_preference : {
		  type: DataTypes.ENUM('0', '1'),
		  allowNull: true,
		  defaultValue: '0',
		},
		sms_preference : {
		  type: DataTypes.ENUM('0', '1'),
		  allowNull: true,
		  defaultValue: '0',
		},
		whatsapp_preference : {
		  type: DataTypes.ENUM('0', '1'),
		  allowNull: true,
		  defaultValue: '0',
		},
		created_at: DataTypes.DATE,
		updated_at: {
		  type: DataTypes.DATE,
		  allowNull: true,
		},
		forgot_at: {
		  type: DataTypes.DATE,
		  allowNull: true,
		},
	},
	{ timestamps: false, freezeTableName: false });
	
	User.associate = (models) => {
		//console.log(models);		
		User.hasOne(models.Post, {
			foreignKey : 'user_id',
			sourceKey: 'id',
			onDelete: 'CASCADE'
		});
	}

	return User;
}

