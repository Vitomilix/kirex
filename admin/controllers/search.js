// Include modules
const { validationResult } = require('express-validator')

// Include models
const db = require('../models')
const Search = db.Search

module.exports = {
getSearch: async (req, res) => {
    try {
      // Get all searches
      const records = await Search.findAll({
        where: { UserId: req.user.id },
        order: [['id', 'ASC']]
          
      })
    
      

  
      // check if any record is found
      const isEmptyRecord = records.length ? false : true
      
      
  
      res.render('search', { indexCSS: true, records,isEmptyRecord })
    } catch (err) {
      return console.log(err)
    }
  },

  getNewSearch: (req, res) => {
    res.render('searchform', { formCSS: true, formValidateJS: true })
  },
  postNewSearch: async (req, res) => {
    // Handle input
    const { name, shopName, shopCategory, nearPoi, radiusToPoI } = req.body
    // Validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('searchform', {
        formCSS: true,
        record: { name, shopName, shopCategory, nearPoi, radiusToPoI },
        formValidateJS: true,
        errorMessages: errors.array()
      })
    }
    
    const newRecord = new Search({
      name: name,
      shopName: shopName,
      shopCategory: shopCategory,
      nearPoi: nearPoi,
      radiusToPoI: radiusToPoI,
      UserId: req.user.id
    })

    try {
      // Save search
      await newRecord.save()
      res.redirect('/admin/search')
    } catch (err) {
      console.log(err)
    }
  },
  getEditSearch: async (req, res) => {
    try {
      //  find search based on ID
      const record = await Search.findOne({ where: { id: req.params.id, UserId: req.user.id } })
      res.render('searchform', { formCSS: true, record, formValidateJS: true, isEditMode: true })
    } catch (err) {
      console.log(err)
    }
  },
  postEditSearch: async (req, res) => {
    //Handle input
    const { name, shopName, shopCategory, nearPoi, radiusToPoI } = req.body
    //  validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('searchform', {
        formCSS: true,
        record: { name, shopName, shopCategory, nearPoi, radiusToPoI, _id: req.params.id },
        formValidateJS: true,
        isEditMode: true,
        errorMessages: errors.array()
      })
    }

    try {
      //Find search based on ID
      const record = await Search.findOne({ where: { id: req.params.id, UserId: req.user.id } })

      //Update/edit search
      record.name = name
      record.shopName = shopName
      record.shopCategory = shopCategory
      record.nearPoi = nearPoi
      record.radiusToPoI = radiusToPoI

      // Save
      await record.save()
      res.redirect('/admin/search')

    } catch (err) {
      console.log(err)
    }
  },
  deleteSearch: (req, res) => {
    Search.destroy({ where: { id: req.params.id, UserId: req.user.id } })
      .then(record => res.redirect('/admin/search'))
  }
}