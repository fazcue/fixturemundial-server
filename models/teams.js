'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Teams extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Teams.init(
		{
			tid: DataTypes.INTEGER,
			name: DataTypes.STRING,
			shortName: DataTypes.STRING,
			crest: DataTypes.STRING,
			address: DataTypes.STRING,
			website: DataTypes.STRING,
			founded: DataTypes.INTEGER,
			venue: DataTypes.STRING,
			area: DataTypes.JSON,
			squad: DataTypes.JSON,
			coach: DataTypes.JSON,
			staff: DataTypes.JSON,
			es: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Teams',
		}
	)
	return Teams
}
