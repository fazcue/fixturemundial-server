'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Teams', 'squad', {
			type: Sequelize.JSON,
			allowNull: true,
		})
		await queryInterface.addColumn('Teams', 'coach', {
			type: Sequelize.JSON,
			allowNull: true,
		})
		await queryInterface.addColumn('Teams', 'staff', {
			type: Sequelize.JSON,
			allowNull: true,
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('Teams', 'squad')
		await queryInterface.removeColumn('Teams', 'coach')
		await queryInterface.removeColumn('Teams', 'staff')
	},
}
