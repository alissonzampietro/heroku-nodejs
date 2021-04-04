const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const fs = require('fs')
let keys = require('./../config/keys')
const {User} = require('./../models')

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    let user = await User.findById(id);
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,  
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {

    let existingUser = await User.findOne({
        googleId: profile.id
    })

    if(!existingUser) {
        const user = new User({googleId: profile.id, name: profile.displayName})
        existingUser = user.save()   
    }

    done(null, existingUser)

    console.log(accessToken, refreshToken, profile, done)
}))