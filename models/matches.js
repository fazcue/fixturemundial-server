'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Matches.init({
    mid: DataTypes.INTEGER,
    area: DataTypes.JSON,
    competition: DataTypes.JSON,
    season: DataTypes.JSON,
    utcDate: DataTypes.STRING,
    status: DataTypes.STRING,
    matchday: DataTypes.INTEGER,
    stage: DataTypes.STRING,
    group: DataTypes.STRING,
    homeTeam: DataTypes.JSON,
    awayTeam: DataTypes.JSON,
    score: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Matches',
  });
  return Matches;
};