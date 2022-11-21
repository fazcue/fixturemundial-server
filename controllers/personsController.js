const db = require('../models')

const { Persons } = db

const personsController = {
	getAll: async (req, res) => {
		//get persons
		const persons = await Persons.findAll()

		return res.json(persons)
	},
	getOne: async (req, res) => {
		const { id } = req.params

		//get persons
		const person = await Persons.findOne({ where: { pid: id } })

		return res.json(person)
	},
	create: async (req, res) => {
		//create person
		const { person } = req.body

		const newPerson = await Persons.create({
			pid: person.id,
			name: person.name,
			firstName: person.firstName,
			lastName: person.lastName,
			dateOfBirth: person.dateOfBirth,
			nationality: person.nationality,
			position: person.position,
			shirtNumber: person.shirtNumber,
			currentTeam: person.currentTeam,
		})

		return res.json(newPerson)
	},
}

module.exports = personsController
