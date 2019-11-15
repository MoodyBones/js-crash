const express = require("express")
const router = express.Router()

const CustomerService = require("../services/customer-service")
const SkillService = require("../services/skill-service")

router.get("/all", async (req, res) => {
  const people = await CustomerService.findAll()
  res.render("list", { items: people })
})

router.get("/:id", async (req, res) => {
  const user = await CustomerService.find(req.params.id)
  res.render("data", { data: user })
})

router.post("/", async (req, res) => {
  const user = await CustomerService.add(req.body)
  res.send(user)
})

router.delete("/:id", async (req, res) => {
  const user = await CustomerService.del(req.params.id)
  res.send(user)
})

router.post("/:id/skills", async (req, res) => {
  const user = await CustomerService.find(req.params.id)
  const skill = await SkillService.find(req.body.meetup)
  await CustomerService.attendMeetup(user, skill)

  res.send(user)
})

module.exports = router
