// Include modules
const passport = require('passport')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
// Nodejs built-it crypto To generate random reset token
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

// Include models
const db = require('../models')
const Admin = db.Admin

//  set up email service
const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    // Hide SMTP sendgrind key
    api_key: process.env.SENDGRID_KEY
  }
}))

module.exports = {
  getRegister: (req, res) => {
    res.render('register', {
      formCSS: true,
      formValidateJS: true
    })
  },
  postRegister: async (req, res) => {
    // And input
    const { name, email, password, rePassword } = req.body
    //  validation
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
      return res.status(422).render('register', {
        formCSS: true,
        formValidateJS: true,
        errorMessages: errors.array(),
        admin: { name, email, password, rePassword }
      })
    }

    try {
      // Check if email exists in database
      const admin = await Admin.findOne({ where: { email: email } })
      // Email exists
      if (admin) {
        req.flash('error', 'You have already registered please login or reset your password if you forgot it')
        return res.redirect('/admin/users/login')
      }

      //  new user
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)

      // store user into database
      await Admin.create({
        name: name,
        email: email,
        password: hash
      })

      // Redirect to login page after successful signup
      req.flash('sucess', 'Registration work! check your email and click on the link to login')
      res.redirect('/admin/users/login')
       req.flash('sucess', 'Registration work! check your email and click on the link to login')
      
      const link = "http://localhost:5000/admin/users/login"
      // send successful sign up email
      await transporter.sendMail({
        to: email,
        from: 'howzit@shoppingkwiens.com',
        subject: 'Welcome to shopping Kwiens',
        html: `
          <p>Howzit ${name},</p>
          <p>Nice to meet you. Click <a href=${link}>here</a> to get started</p>
        `
      })
    } catch (err) {
      res.redirect('/admin/users/register')
      console.log(err)
    }
  },
  getLogin: (req, res) => {
    res.render('login', {
      formCSS: true,
      formValidateJS: true
    })
  },
  getLogout: (req, res) => {
    //Handle logout
    req.logout()
    // show logout success message
    req.flash('success', 'You have been logged out, Cheers')
    // Redirect to homepage
    res.redirect('/')
  },
  getReset: (req, res) => {
    res.render('reset', {
      formCSS: true,
      formValidateJS: true,
    })
  },
  postRest: async (req, res) => {
    try {
      // generate random reset token
      const buffer = await crypto.randomBytes(32)
      const token = buffer.toString('hex')

      // Store token in data base with user wishing to reset
      const admin = await Admin.findOne({ where: { email: req.body.email } })

      // no user found
      if (!admin) {
        req.flash('error', 'Eish, your email was not found')
        return res.redirect('/admin/users/reset')
      }

      // user is found, add token
      admin.resetToken = token
      // token expired in 24 hours
      admin.resetTokenExpiration = Date.now() + 86400000
      // save token and expiration time
      await admin.save()
      // redirect back to login page
      res.redirect('/admin/users/login')
      
      const link = `http://localhost:5000/users/reset/${token}`
      // send a reset email to user with unique token 
      transporter.sendMail({
        to: req.body.email,
        from: 'eish@shoppingkwiens.com',
        subject: 'Password reset',
        html: `
          <p>Eish ${admin.name},</p>
          <p>Have you forgotten your password? <br> Ok, we'll be nice!. Click<a href=${link}>this link</a>To reset your password</p>
        `
      })
    } catch (err) {
      res.redirect('/admin/users/reset')
      console.log(err)
    }
  },
  getNewPassword: async (req, res) => {
    // get token from in the URL
    const token = req.params.token

    try {
      // find the user in the database
      const admin = await Admin.findOne({ where: { resetToken: token, resetTokenExpiration: { [Op.gt]: Date.now() } } })
      // render to new password set up page
      res.render('new-password', {
        formCSS: true,
        formValidateJS: true,
        userId: admin.id,
        passwordToken: token
      })
    } catch (err) {
      res.redirect('/admin/users/reset')
      console.log(err)
    }
  },
  postNewPassword: async (req, res) => {
    const { password, userId, passwordToken } = req.body
    // Validation
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
      return res.status(422).render('new-password', {
        formCSS: true,
        formValidateJS: true,
        userId: admin.id,
        passwordToken: token
      })
    }

    // form passed validation
    try {
      // find user
      const admin = await Admin.findOne({ resetToken: passwordToken, resetTokenExpiration: { [Op.gt]: Date.now() }, id: userId })
      // hash new password
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)
      // update password and clear token
      admin.password = hash
      admin.resetToken = null
      admin.resetTokenExpiration = null
      await admin.save()
      // redirect back to login page
      res.redirect('/admin/users/login')
      req.flash('success', 'Great your password is reset login again please.')

    } catch (err) {
      res.redirect('/admin/users/reset')
      console.log(err)
    }
  }
}
