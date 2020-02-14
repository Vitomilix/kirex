const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const passport = require('passport')

// Include controller
const userController = require('../controllers/user')

// signup page
router.get('/register', userController.getRegister)

// signup submit
router.post('/register', [
  
  body('name')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Don\'t be so shy, please tell us how we should call you'),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('The Email should be of the form shopping@kwiens.com'),
  
  body('password')
    .custom((value) => {
      const regex = /^\S{8,255}$/
      if (!value.match(regex)) {
        throw new Error('We thought you were safety conscious, enter password of more than 8 Charactars')
      }
      return true
    }),
  
  body('rePassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Eish, your Passwords do not match')
      }
      return true
    })
], userController.postRegister)

// login page
router.get('/login', userController.getLogin)

// login submit
router.post('/login', passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/users/login',
  failureFlash: true
}))

// logout page
router.get('/logout', userController.getLogout)

// reset password page and send email
router.get('/reset', userController.getReset)

// reset password submit
router.post('/reset', userController.postRest)

// reset password, come from email link
router.get('/reset/:token', userController.getNewPassword)

// reset password, come from email link
router.post('/new-password', [
  // password is required
  body('password')
    .custom((value) => {
      const regex = /^\S{8,255}$/
      if (!value.match(regex)) {
        throw new Error('Please enter password but least 8 characters')
      }
      return true
    }),
  // re-password is required and should match the first input
  body('rePassword')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Your passwords do not match')
      }
      return true
    })
], userController.postNewPassword)

module.exports = router

