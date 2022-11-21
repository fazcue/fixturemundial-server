'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mid: {
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.JSON
      },
      competition: {
        type: Sequelize.JSON
      },
      season: {
        type: Sequelize.JSON
      },
      utcDate: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      matchday: {
        type: Sequelize.INTEGER
      },
      stage: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      homeTeam: {
        type: Sequelize.JSON
      },
      awayTeam: {
        type: Sequelize.JSON
      },
      score: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matches');
  }
};