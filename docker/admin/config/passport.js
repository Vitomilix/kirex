// Include modules 
const passport = require('passport')
const LocalStorage = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const bcrypt = require('bcryptjs')

// Include models
const db = require('../models')
const Admin = db.Admin


module.exports = passport => {
  // Configure strategy using use() function
  passport.use(new LocalStorage({
    // ask LocalStrategy to find username in parameter named email
    usernameField: 'email',
    // also pass req to verify callback
    passReqToCallback: true
  },
    // set up a verify call back to accept credentials
    function (req, username, password, done) {
      Admin.findOne({ where: { email: username } })
        .then(admin => {
          // no such user
          if (!admin) { return done(null, false, req.flash('error', 'Your Email was not found')) }
          // has such user, but with incorrect password
          bcrypt.compare(password, admin.password, (err, isMatch) => {
            // password correct
            if (isMatch) { return done(null, admin) }
            // password incorrect
            return done(null, false, req.flash('error', 'Your Email and/or Password is wrong'))
          })
        })
        .catch(err => {
          return done(err)
        })

    }
  ))

  // Configure 


  // Serialize user instance to the session
  passport.serializeUser((admin, done) => {
    done(null, admin.id)
  })

  // Deserialize user instance from the session
  passport.deserializeUser((id, done) => {
    // id from the session is used to find the user, and be stored to req.user
    Admin.findByPk(id)
      .then(admin => done(null, admin))
      .catch(err => done(err))
  })
}