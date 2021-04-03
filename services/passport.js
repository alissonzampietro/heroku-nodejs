const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const fs = require('fs')
let keys = require('./../config/keys')
const {User} = require('./../models')

passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,  
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    const user = new User({googleId: profile.id, name: profile.displayName})
    user.save()
    console.log(accessToken, refreshToken, profile, done)
}))