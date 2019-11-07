// // Untitled Designer Database
// const Designer = require('./models/designer')
// const Skill = require('./models/skill')
// const Customer = require('./models/customer')
// const DesignerService = require('./services/designer-service')
// const SkillService = require('./services/skill-service')
// const CustomerService = require('./services/customer-service')
// const Chalk = require('chalk')

// console.log('Hello World!! this is Mel Jones')

///////// WEEK 4
const express = require('express')
const DesignerService = require('./services/designer-service')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  // res.send('Hello')
  res.render('index')
})

app.get('/designer/all', async (req, res) => {
  const designers = await DesignerService.findAll()
  res.render('designer', { designers: designers })
})

app.get('/designer/:id', async (req, res) => {
  const id = req.params.id
  const designer = await DesignerService.find(id)
  res.send(designer)
})

app.post('/person', async (req, res) => {
  console.log(req.body)
  // !!! Error in chrome devtools console when I enter: 
  // axios.post('/designer', { name: 'Mel', email: 'mel@gmail.com' }).then(console.log)

  // Console returns:
  // [[PromiseStatus]]: "rejected"
  // [[PromiseValue]]: Error: Request failed with status code 404 at e.exports

  // const designer = await DesignerService.add(req.body)
  // res.send(designer)
})

// app.delete('/designer/:id', async (req, res) => {

// })

app.listen(3000, () => {
  console.log('Server listening')
})
