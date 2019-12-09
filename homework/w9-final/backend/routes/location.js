const express = require('express')

const router = express.Router()

const LocationService = require('../services/location-service')

router.get('/all', async (req, res) => {
  try {
    const locations = await LocationService.findAll()
    res.render('list', { items: locations })
  } catch (err) {
    console.error(err.message)
    res.status(404).send(`Server error: ${err.message}`)
  }
})

router.get('/all/json', async (req, res) => {
  try {
    const locations = await LocationService.findAll()
    res.send(locations)
  } catch (err) {
    console.error(err.message)
    res.status(404).send(`Server error: ${err.message}`)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const location = await LocationService.find(id)
    if (!location) {
      res.status(404).send(`Error: Could not find location for id >${id}<`)
    } else {
      res.render('data', { data: location })
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

router.get('/:id/json', async (req, res) => {
  const { id } = req.params
  try {
    const location = await LocationService.find(id)
    if (!location) {
      res.status(404).send(`Error: Could not find location for id >${id}<`)
    } else {
      res.send(location)
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

router.post('/', async (req, res) => {
  try {
    const location = await LocationService.add(req.body)
    res.send(location)
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const location = await LocationService.del(id)
    if (!location) {
      res.status(404).send(`Error: Could not find location for id >${id}<`)
    } else {
      res.send('Location deleted OK')
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send(`Server error: ${err.message}`)
  }
})

module.exports = router
