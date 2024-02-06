const express = require("express")
const { getGoalCtrl } = require("../controllers/goals")

const goalRouter = express.Router()


goalRouter.get('/api/v1/goals/', getGoalCtrl)
goalRouter.post('/api/vi/goals', )

module.exports = goalRouter