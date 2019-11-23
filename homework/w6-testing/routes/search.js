const express = require('express')

const router = express.Router()

const SearchService = require('../services/search-service')
const DesignerService = require('../services/designer-service')
const SkillService = require('../services/skill-service')
const LocationService = require('../services/location-service')

router.get('/all', async (req, res) => {
  const people = await SearchService.findAll()
  res.render('list', { items: people })
})

router.get('/:id', async (req, res) => {
  const user = await SearchService.find(req.params.id)
  res.render('data', { data: user })
})

router.post('/', async (req, res) => {
  const user = await SearchService.add(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await SearchService.del(req.params.id)
  res.send(user)
})


module.exports = router
