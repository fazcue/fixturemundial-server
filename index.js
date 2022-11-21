require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const createError = require('http-errors')
const logger = require('morgan')

//Routes router
const indexRouter = require('./routes/index')
const personsRouter = require('./routes/persons')
const teamsRouter = require('./routes/teams')
const matchesRouter = require('./routes/matches')
const standingsRouter = require('./routes/standings')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Routes
app.use('/', indexRouter)
app.use('/persons', personsRouter)
app.use('/teams', teamsRouter)
app.use('/matches', matchesRouter)
app.use('/standings', standingsRouter)

//testing
// if (process.env.NODE_ENV === 'development') {
// 	const testingRouter = require('./routes/testing')
// 	app.use('/testing', testingRouter)
// }

//Catch 404
app.use((req, res, next) => next(createError(404)))

//Unknown endpoint middleware
const unknownEndpoint = (req, res) => {
	res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

//Listen
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
