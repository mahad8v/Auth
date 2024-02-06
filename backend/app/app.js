const express = require("express");
// const morgan = require("morgan")
const goalRouter = require("../routes/goalRoute");
const app = express()

// app.use(morgan('dev'))
app.use(express.json())

app.use('/', goalRouter)


module.exports = app;
