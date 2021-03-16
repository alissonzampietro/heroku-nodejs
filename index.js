const express = require('express')
const mongoose = require('mongoose')
const {mongoUri} = require('./config/keys')
require('./services/passport')

mongoose.connect(mongoUri, {useNewUrlParser:true})

const app = express()

require('./routes/v1/auth')(app)

app.get('/', (req, res) => {
    res.send({'status': 'working'})
})

const PORT = process.env.PORT || 5000
app.listen(PORT)