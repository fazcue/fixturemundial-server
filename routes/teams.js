const express = require('express')
const router = express.Router()

const teamsController = require('../controllers/teamsController')

// const isUser = require('../middlewares/isUser')

router.get('/', teamsController.getAll)
router.get('/:id', teamsController.getOne)
router.post('/', teamsController.create)

module.exports = router
