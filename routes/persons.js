const express = require('express')
const router = express.Router()

const personsController = require('../controllers/personsController')

// const isUser = require('../middlewares/isUser')

router.get('/', personsController.getAll)
router.get('/:id', personsController.getOne)
router.post('/', personsController.create)

module.exports = router
