const express = require('express')
let keys = require('./config/keys')
const passport = require('passport')
const cookieSession = require('cookie-session')
require('./services/passport')

const app = express()

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session()); 

require('./routes/v1/auth')(app)

app.get('/', (req, res) => {
    res.send({'status': 'api working'})
})

const PORT = process.env.PORT || 5000
app.listen(PORT)