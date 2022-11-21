const db = require('../models')

const { Matches } = db

const matchesController = {
	getAll: async (req, res) => {
		//get persons
		const matches = await Matches.findAll()

		return res.json(matches)
	},
	getOne: async (req, res) => {
		const { id } = req.params

		//get persons
		const matches = await Matches.findOne({ where: { tid: id } })

		return res.json(matches)
	},
	create: async (req, res) => {
		//create person
		const { match } = req.body

		const newMatch = await Matches.create({
			area: match.area,
			competition: match.competition,
			season: match.season,
			mid: match.id,
			utcDate: match.utcDate,
			status: match.status,
			matchday: match.matchday,
			stage: match.stage,
			group: match.group,
			homeTeam: match.homeTeam,
			awayTeam: match.awayTeam,
			score: match.score,
		})

		return res.json(newMatch)
	},
}

module.exports = matchesController
