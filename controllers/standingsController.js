const db = require('../models')

const { Standings } = db

const standingsController = {
	getAll: async (req, res) => {
		//get persons
		const standings = await Standings.findAll()

		return res.json(standings)
	},
	getOne: async (req, res) => {
		const { id } = req.params

		//get persons
		const standing = await Standings.findOne({ where: { id: id } })

		return res.json(standing)
	},
	create: async (req, res) => {
		//create person
		const { standing } = req.body

		const newStanding = await Standings.create({
			area: standing.area,
			competition: standing.competition,
			season: standing.season,
			standings: standing.standings,
		})

		return res.json(newStanding)
	},
}

module.exports = standingsController
