const db = require('../models')

const { Teams } = db

const teamsController = {
	getAll: async (req, res) => {
		//get persons
		const teams = await Teams.findAll()

		return res.json(teams)
	},
	getOne: async (req, res) => {
		const { id } = req.params

		//get persons
		const team = await Teams.findOne({ where: { tid: id } })

		return res.json(team)
	},
	create: async (req, res) => {
		//create person
		const { team } = req.body

		const newTeam = await Teams.create({
			tid: team.id,
			name: team.name,
			shortName: team.shortName,
			crest: team.crest,
			address: team.address,
			website: team.website,
			founded: team.founded,
			venue: team.venue,
			area: team.area,
			squad: team.squad,
			coach: team.coach,
			staff: team.staff,
			es: null,
		})

		return res.json(newTeam)
	},
}

module.exports = teamsController
