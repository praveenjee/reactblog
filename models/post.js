module.exports = (sequelize, DataTypes) => {
	//Define post schema here
	const Post = sequelize.define('Post', {
		id: {
		  type: DataTypes.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
		},
		title: {
		  type: DataTypes.STRING,
		  allowNull: false,
		},
		slug: {
		  type: DataTypes.STRING,
		  allowNull: false,
		  unique: true,
		},
		category: {
		  type: DataTypes.STRING,
		  allowNull: true,
		},
		short_description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		status: {
		  type: DataTypes.ENUM('0', '1'),
		  defaultValue: '0',
		},
		user_id: {
			type: DataTypes.INTEGER,
		},
		profilename: {
		  type: DataTypes.STRING,
		  allowNull: true,
		},
		imagepath: {
		  type: DataTypes.STRING,
		  allowNull: true,
		},
		meta_title: {
		  type: DataTypes.STRING,
		  allowNull: true,
		},
		meta_keywords: {
		  type: DataTypes.STRING,
		  allowNull: true,
		},
		meta_description: {
		  type: DataTypes.STRING,
		  allowNull: true,
		},
		created_at: DataTypes.DATE,
		updated_at: {
		  type: DataTypes.DATE,
		  allowNull: true,
		},	  
	},
	{ timestamps: false });

	return Post;
}