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

router.post('/:id/skills', async (req, res) => {
  const user = await DesignerService.find(req.params.id)
  const skill = await SkillService.find(req.body.skill)
  await SearchService.getSkills(user, skill)
  res.send(user)
})

router.post('/:id/location', async (req, res) => {
  const user = await DesignerService.find(req.params.id)
  const location = await LocationService.find(req.body.location)
  await SearchService.getLocations(user, location)
  res.send(user)
})

module.exports = router
