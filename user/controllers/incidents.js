// Include models
//const { getFormatedMonth, getChartData } = require('../date-process')

// Include models
const db = require('../models')
const Incidents = db.Incidents
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { validationResult } = require('express-validator')
module.exports = {
  getHome: async (req, res) => {
    try {
   
   let title = "Submit a new Incident | Kirex"
      
      res.render('incidents', { layout: 'main', formCSS: true, title})
    } catch (err) {
      return console.log(err)
    }
  },
  postNewIncident: async (req, res) => {
    //Handle input
    const {   date, division, incidentLocation, division_employee, events,  
   injuries,  downtime, cause, measures, imageOne} = req.body

   console.log(req.body);
   
    //Input validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('incidents', {
        formCSS: true,
        record: {  date, division, incidentLocation, division_employee, events,  
   injuries,  downtime, cause, measures, imageOne},
        formValidateJS: true,
        errorMessages: errors.array()
      })
    }
    
    const newRecord = new Incidents({
      date: date,
      division: division,
      incidentLocation: incidentLocation,
      division_employee: division_employee,
      events: events,
      injuries: injuries,
      downtime: downtime,
      cause: cause,
      measures: measures,
      imageOne: imageOne,
      UserId: req.user.id
    })

    try {
      // Save point of interest
      await newRecord.save()
      req.flash('success', 'Your Incident has been logged')
      res.redirect('/')
    } catch (err) {
      console.log(err)
    }
  },

}

  