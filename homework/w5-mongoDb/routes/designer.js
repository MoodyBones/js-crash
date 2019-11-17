const express = require('express')

const router = express.Router()

const DesignerService = require('../services/designer-service')
const SkillService = require('../services/skill-service')

router.get('/all', async (req, res) => {
  const people = await DesignerService.findAll()
  res.render('list', { items: people })
})

router.get('/:id', async (req, res) => {
  const user = await DesignerService.find(req.params.id)
  res.render('data', { data: user })
})

router.post('/', async (req, res) => {
  const user = await DesignerService.add(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await DesignerService.del(req.params.id)
  res.send(user)
})

router.post('/:id/skills', async (req, res) => {
  const user = await DesignerService.find(req.params.id)
  const skill = await SkillService.find(req.body.meetup)
  await DesignerService.attendMeetup(user, skill)

  res.send(user)
})

// router.get("/:id/peers-over-18", async (req, res) => {
//   const user = await DesignerService.find(req.params.id)
//   const peers = await user.findPeersOver18()
//   res.send(peers)
// })

module.exports = router
