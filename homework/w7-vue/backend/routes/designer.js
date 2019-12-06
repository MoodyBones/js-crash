const express = require('express')

const router = express.Router()

const DesignerService = require('../services/designer-service')
const SkillService = require('../services/skill-service')
const LocationService = require('../services/location-service')

router.get('/all', async (req, res) => {
  try {
    const designers = await DesignerService.findAll()
    res.render('list', { items: designers })
  } catch (err) {
    console.error(err.message)
    res.status(404).send(`Server error: ${err.message}`)
  }
})

// to connect with frontend
router.get('/all/json', async (req, res) => {
  try {
    const designers= await DesignerService.findAll()
    res.send(designers)
  } catch (err) {
    console.error(err.message)
    res.status(404).send(`Server error: ${err.message}`)
  }
})


router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await DesignerService.find(id)
    if (!user) {
      res.status(404).send(`Error: Could not find designer for id >${id}<`)
    } else {
      res.render('data', { data: user })
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

router.post('/', async (req, res) => {
  try {
    const user = await DesignerService.add(req.body)
    res.send(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await DesignerService.del(id)
    if (!user) {
      res.status(404).send(`Error: Could not find designer for id >${id}<`)
    } else {
      res.send('User deleted OK')
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

router.post('/:id/skills', async (req, res) => {
  try {
    const user = await DesignerService.find(req.params.id)
    const skill = await SkillService.find(req.body.skill)
    if (!user) {
      res.status(404).send(`Error: Could not find DESIGNER for id >${id}<`)
    } else if (!skill) {
      res.status(404).send(`Error: Could not find SKILL for id >${id}<`)
    } else {
      await DesignerService.addSkills(user, skill)
      res.send(user)
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

router.post('/:id/location', async (req, res) => {
  try {
    const user = await DesignerService.find(req.params.id)
    const location = await LocationService.find(req.body.location)
    if (!user) {
      res.status(404).send(`Error: Could not find DESIGNER for id >${id}<`)
    } else if (!location) {
      res.status(404).send(`Error: Could not find LOCATION for id >${id}<`)
    } else {
      await DesignerService.setLocations(user, location)
      res.send(user)
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

module.exports = router
