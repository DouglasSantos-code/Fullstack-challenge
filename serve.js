const express = require('express')
const app = express()
const PORT = 3000
const apiRoute = require('./routes/api')
const path = require('path')

app.use('/api', apiRoute)
app.use('/', express.static(path.join(__dirname, "public")))
app.listen(PORT)