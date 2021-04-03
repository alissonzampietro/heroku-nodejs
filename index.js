const express = require('express')
require('./services/passport')

const app = express()

require('./routes/v1/auth')(app)

app.get('/', (req, res) => {
    res.send({'status': 'working'})
})

const PORT = process.env.PORT || 5000
app.listen(PORT)