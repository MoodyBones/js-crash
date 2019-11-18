const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


const designerRouter = require('./routes/designer')
const skillRouter = require('./routes/skill')
const locationRouter = require('./routes/location')
const customerRouter = require('./routes/customer')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))


app.use('/designer', designerRouter)
app.use('/skill', skillRouter)
app.use('/location', locationRouter)
app.use('/customer', customerRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server listening')
})


