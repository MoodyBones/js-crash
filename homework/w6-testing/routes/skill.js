const express = require('express')

const router = express.Router()

const SkillService = require('../services/skill-service')

router.get('/all', async (req, res) => {
  const skills = await SkillService.findAll()
  res.render('list', { items: skills })
})

router.get('/:id', async (req, res) => {
  const skill = await SkillService.find(req.params.id)
  res.render('data', { data: skill })
})

router.post('/', async (req, res) => {
  const skill = await SkillService.add(req.body)
  res.send(skill)
})

router.delete('/:id', async (req, res) => {
  const skill = await SkillService.del(req.params.id)
  res.send(skill)
})

module.exports = router
