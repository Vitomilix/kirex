// Include modules
const { validationResult } = require('express-validator')

// Include models
const db = require('../models')
const Shop = db.Shop

module.exports = {
getShop: async (req, res) => {
    try {
      // Find all shops
      const records = await Shop.findAll({
        where: { UserId: req.user.id },
        order: [['id', 'ASC']]
          
      })
    
      

  
      // check if any record is found
      const isEmptyRecord = records.length ? false : true
     
      
  
      res.render('shop', { indexCSS: true, records,isEmptyRecord })
    } catch (err) {
      return console.log(err)
    }
  },

  getNewShop: (req, res) => {
    res.render('shopform', { formCSS: true, formValidateJS: true })
  },
  postNewShop: async (req, res) => {
    // Handle input
    const {   lat, lon, name, website, tradingHours, category, street, postalCode } = req.body
    //Validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('shopform', {
        formCSS: true,
        record: {   lat, lon, name, website, tradingHours, category, street, postalCode },
        formValidateJS: true,
        errorMessages: errors.array()
      })
    }
    
    const newRecord = new Shop({
      lat: lat,
      lon: lon,
      name: name,
      website: website,
      tradingHours: tradingHours,
      category: category,
      street: street,
      postalCode: postalCode,
      UserId: req.user.id
    })

    try {
      // Save to the data base
      await newRecord.save()
      res.redirect('/admin/shop')
    } catch (err) {
      console.log(err)
    }
  },
  getEditShop: async (req, res) => {
    try {
      // Find shop based on ID
      const record = await Shop.findOne({ where: { id: req.params.id, UserId: req.user.id } })
      res.render('shopform', { formCSS: true, record, formValidateJS: true, isEditMode: true })
    } catch (err) {
      console.log(err)
    }
  },
  postEditShop: async (req, res) => {
   // Handle input
    const {   lat, lon, name, website, tradingHours, category, street, postalCode } = req.body
    // Validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('shopform', {
        formCSS: true,
        record: { lat, lon, name, website, tradingHours, category, street, postalCode, _id: req.params.id },
        formValidateJS: true,
        isEditMode: true,
        errorMessages: errors.array()
      })
    }

    try {
      // Find shop based on ID
      const record = await Shop.findOne({ where: { id: req.params.id, UserId: req.user.id } })

      // Update/edit
      record.lat = lat
      record.lon = lon
      record.name = name
      record.website = website
      record.tradingHours = tradingHours
      record.category = category
      record.street = street
      record.postalCode = postalCode

      // Save to the database
      await record.save()
      res.redirect('/admin/shop')

    } catch (err) {
      console.log(err)
    }
  },
  deleteShop: (req, res) => {
    Shop.destroy({ where: { id: req.params.id, UserId: req.user.id } })
      .then(record => res.redirect('/admin/shop'))
  }
}