const express = require('express')
const router = express.Router()

const standingsController = require('../controllers/standingsController')

// const isUser = require('../middlewares/isUser')

router.get('/', standingsController.getAll)
router.get('/:id', standingsController.getOne)
router.post('/', standingsController.create)

module.exports = router
