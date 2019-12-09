const express = require('express')

const router = express.Router()

const UserService = require('../services/user-service')
const SkillService = require('../services/skill-service')

router.get('/all', async (req, res) => {
  const people = await UserService.findAll()
  res.render('list', { items: people })
})

router.get('/:id', async (req, res) => {
  const user = await UserService.find(req.params.id)
  res.render('data', { data: user })
})

router.post('/', async (req, res) => {
  const user = await UserService.add(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await UserService.del(req.params.id)
  res.send(user)
})

router.post('/:id/skills', async (req, res) => {
  const user = await UserService.find(req.params.id)
  const skill = await SkillService.find(req.body.meetup)
  await UserService.attendMeetup(user, skill)

  res.send(user)
})

module.exports = router
