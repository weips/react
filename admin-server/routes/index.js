const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const loginRouter = require('./login')
app.use(bodyParser.json())
app.use('/', loginRouter)
// router.get('/', loginRouter)

module.exports = app