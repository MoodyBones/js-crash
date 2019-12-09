const express = require('express')

const router = express.Router()

const LocationService = require('../services/location-service')

router.get('/all', async (req, res) => {
  const locations = await LocationService.findAll()
  res.render('list', { items: locations })
})

router.get('/:id', async (req, res) => {
  const location = await LocationService.find(req.params.id)
  res.render('data', { data: location })
})

router.post('/', async (req, res) => {
  const location = await LocationService.add(req.body)
  res.send(location)
})

router.delete('/:id', async (req, res) => {
  const location = await LocationService.del(req.params.id)
  res.send(location)
})

// crashes app
// router.get('/:id/designers-by-location', async (req, res) => {
//   const location = await LocationService.find(req.params.id)
//   const designers = await location.findDesignersByLocation(location)
//   res.send(designers)
// })

module.exports = router
