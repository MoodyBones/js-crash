// // Untitled Designer Database
// const Designer = require('./models/designer')
// const Skill = require('./models/skill')
// const Customer = require('./models/customer')
// const DesignerService = require('./services/designer-service')
// const SkillService = require('./services/skill-service')
// const CustomerService = require('./services/customer-service')
// const Chalk = require('chalk')

// console.log('Hello World!! this is Mel Jones')

// /////// WEEK 4
// const express = require('express')
// const bodyParser = require('body-parser')
// const path = require('path')
// const DesignerService = require('./services/designer-service')
// const SkillService = require('./services/skill-service')

// const app = express()

// app.use(bodyParser.json())
// app.set('view engine', 'pug')

// app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//   // res.send('Hello')
//   res.render('index')
// })

// app.get('/designer/all', async (req, res) => {
//   const designers = await DesignerService.findAll()
//   res.render('designer', { title: 'Designers', designers })
// })

// app.get('/designer/:id', async (req, res) => {
//   const { id } = req.params
//   const designer = await DesignerService.find(id)
//   res.send(designer)
// })

// app.post('/designer', async (req, res) => {
//   // console.log(req.body)
//   const designer = await DesignerService.add(req.body)
//   res.send(designer)
// })

// app.delete('/designer/:id', async (req, res) => {
//   await DesignerService.del(req.params.id)
//   res.send('ok')
// })

// app.get('/skill/all', async (req, res) => {
//   const skills = await SkillService.findAll()
//   res.render('skill', { title: 'Skills', skills })
// })

// // app.get('/skill/:id', async (req, res) => {
// //   const { id } = req.params
// //   const skill = await SkillService.find(id)
// //   res.send(skill)
// // })

// // app.post('/skill', async (req, res) => {
// //   // console.log(req.body)
// //   const skill = await SkillService.add(req.body)
// //   res.send(skill)
// // })

// // app.delete('/skill/:id', async (req, res) => {
// //   await SkillService.del(req.params.id)
// //   res.send('ok')
// // })

// app.listen(3000, () => {
//   console.log('Server listening')
// })

// WEEK 5

const express = require('express')
const bodyParser = require('body-parser')

const designerRouter = require('./routes/designer')
const skillRouter = require('./routes/skill')
const customerRouter = require('./routes/customer')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/designer', designerRouter)
app.use('/skill', skillRouter)
app.use('/customer', customerRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server listening')
})


