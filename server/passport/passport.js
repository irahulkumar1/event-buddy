const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');

passport.serializeUser(function (user, done) {
    done(null, user.id)
})

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user)
    })
})

passport.use(new LocalStrategy({
    usernameField: 'email',
    passportField: 'password'
}, (email, password, done) => {
    User.findOne({ email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false) }

        user.comparePassword(password, function (err, isMatch) {
            if (err) { return done(err); }
            if (!isMatch) { return done(null, false) }

            return done(null, user)
        })
    })
}))