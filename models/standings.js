'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Standings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Standings.init({
    area: DataTypes.JSON,
    competition: DataTypes.JSON,
    season: DataTypes.JSON,
    standings: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Standings',
  });
  return Standings;
};