// Include modules
const { validationResult } = require('express-validator')

// Include models
const db = require('../models')
const Poi = db.Poi

module.exports = {
getPoi: async (req, res) => {
    try {
      // Get all points of interest
      const records = await Poi.findAll({
        where: { UserId: req.user.id },
        order: [['id', 'ASC']]
          
      })
    
      

  
      // check if any record is found
      const isEmptyRecord = records.length ? false : true
      
      
  
      res.render('poi', { indexCSS: true, records,isEmptyRecord })
    } catch (err) {
      return console.log(err)
    }
  },

  getNewPoi: (req, res) => {
    res.render('poiform', { formCSS: true, formValidateJS: true })
  },
  postNewPoi: async (req, res) => {
    //Handle input
    const {   lat, lon, name} = req.body
    //Input validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('poiform', {
        formCSS: true,
        record: {   lat, lon, name},
        formValidateJS: true,
        errorMessages: errors.array()
      })
    }
    
    const newRecord = new Poi({
      lat: lat,
      lon: lon,
      name: name,
      UserId: req.user.id
    })

    try {
      // Save point of interest
      await newRecord.save()
      res.redirect('/admin/poi')
    } catch (err) {
      console.log(err)
    }
  },
  getEditPoi: async (req, res) => {
    try {
      //Find point of interest based on ID
      const record = await Poi.findOne({ where: { id: req.params.id, UserId: req.user.id } })
      res.render('poiform', { formCSS: true, record, formValidateJS: true, isEditMode: true })
    } catch (err) {
      console.log(err)
    }
  },
  postEditPoi: async (req, res) => {
    // handle input
    const {   lat, lon, name} = req.body
    // Validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('poiform', {
        formCSS: true,
        record: { lat, lon, name, _id: req.params.id },
        formValidateJS: true,
        isEditMode: true,
        errorMessages: errors.array()
      })
    }

    try {
      // Find point of interest based on ID
      const record = await Poi.findOne({ where: { id: req.params.id, UserId: req.user.id } })

      // update document info based on form input
      record.lat = lat
      record.lon = lon
      record.name = name
      

      // Save point of interest
      await record.save()
      res.redirect('/admin/poi')

    } catch (err) {
      console.log(err)
    }
  },
  deletePoi: (req, res) => {
    Poi.destroy({ where: { id: req.params.id, UserId: req.user.id } })
      .then(record => res.redirect('/admin/poi'))
  }
}