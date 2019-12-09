const express = require('express')

const router = express.Router()

const SkillService = require('../services/skill-service')

router.get('/all', async (req, res) => {
  try {
    const skills = await SkillService.findAll()
    res.render('list', { items: skills })
  } catch (err) {
    console.error(err.message)
    res.status(404).send(`Server error: ${err.message}`)
  }
})

router.get('/all/json', async (req, res) => {
  // add json
  try {
    const skills = await SkillService.findAll()
    res.send(skills) // change this
  } catch (err) {
    console.error(err.message)
    res.status(404).send(`Server error: ${err.message}`)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const skill = await SkillService.find(id)
    if (!skill) {
      res.status(404).send(`Error: Could not find skill for id >${id}<`)
    } else {
      res.render('data', { data: skill })
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

router.get('/:id/json', async (req, res) => {
  // add json
  const { id } = req.params
  try {
    const skill = await SkillService.find(id)
    if (!skill) {
      res.status(404).send(`Error: Could not find skill for id >${id}<`)
    } else {
      res.send(skill) // change this
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

router.post('/', async (req, res) => {
  try {
    const skill = await SkillService.add(req.body)
    res.send(skill)
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const skill = await SkillService.del(id)
    if (!skill) {
      res.status(404).send(`Error: Could not find skill for id >${id}<`)
    } else {
      res.send('Skill deleted OK')
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

module.exports = router
