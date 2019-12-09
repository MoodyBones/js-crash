const express = require('express')
const bodyParser = require('body-parser')
// const path = require('path') // can i remove this now? i think yes!?
const cors = require('cors')

const designerRouter = require('./routes/designer')
const skillRouter = require('./routes/skill')
const locationRouter = require('./routes/location')

require('./mongo-connection')

const app = express()
app.use(cors())

app.set('view engine', 'pug')
app.use(bodyParser.json())

// app.use(express.static(path.join(__dirname, 'public'))) // remove this

app.use('/designer', designerRouter)
app.use('/skill', skillRouter)
app.use('/location', locationRouter)

app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app
