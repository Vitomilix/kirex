// Include modules
const { validationResult } = require('express-validator')

// Include models
const db = require('../models')
const Search = db.Search

module.exports = {
  getNewExpense: (req, res) => {
    res.render('form', { formCSS: true, formValidateJS: true })
  },
  postNewExpense: async (req, res) => {
    // retrieve input data
    const { name, shopName, shopCategory, nearPoi, radiusToPoI } = req.body
    // Find all validation errors in the req in a object
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('form', {
        formCSS: true,
        record: { name, shopName, shopCategory, nearPoi, radiusToPoI },
        formValidateJS: true,
        errorMessages: errors.array()
      })
    }
    // form passed validation: create new document in record collection
    const newRecord = new Search({
      name: name,
      shopName: shopName,
      shopCategory: shopCategory,
      nearPoi: nearPoi,
      radiusToPoI: radiusToPoI,
      UserId: req.user.id
    })

    try {
      // save the document to record collection
      await newRecord.save()
      res.redirect('/')
    } catch (err) {
      console.log(err)
    }
  },
  getEditExpense: async (req, res) => {
    try {
      // find the document based on id 
      const record = await Search.findOne({ where: { id: req.params.id, UserId: req.user.id } })
      res.render('form', { formCSS: true, record, formValidateJS: true, isEditMode: true })
    } catch (err) {
      console.log(err)
    }
  },
  postEditExpense: async (req, res) => {
    // get all data from data input
    const { name, shopName, shopCategory, nearPoi, radiusToPoI } = req.body
    // Find all validation errors in the req in a object
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('form', {
        formCSS: true,
        record: { name, shopName, shopCategory, nearPoi, radiusToPoI, _id: req.params.id },
        formValidateJS: true,
        isEditMode: true,
        errorMessages: errors.array()
      })
    }

    try {
      // find the document based on id
      const record = await Search.findOne({ where: { id: req.params.id, UserId: req.user.id } })

      // update document info based on form input
      record.name = name
      record.shopName = shopName
      record.shopCategory = shopCategory
      record.nearPoi = nearPoi
      record.radiusToPoI = radiusToPoI

      // save the document to database
      await record.save()
      res.redirect('/')

    } catch (err) {
      console.log(err)
    }
  },
  deleteExpense: (req, res) => {
    Search.destroy({ where: { id: req.params.id, UserId: req.user.id } })
      .then(record => res.redirect('/'))
  }
}