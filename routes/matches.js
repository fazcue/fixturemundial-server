const express = require('express')
const router = express.Router()

const matchesController = require('../controllers/matchesController')

// const isUser = require('../middlewares/isUser')

router.get('/', matchesController.getAll)
router.get('/:id', matchesController.getOne)
router.post('/', matchesController.create)

module.exports = router
