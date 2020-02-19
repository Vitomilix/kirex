// Include models
//const { getFormatedMonth, getChartData } = require('../date-process')

// Include models
const db = require('../models')
const Hira = db.Hira
const Poi = db.Poi
const Sequelize = require('sequelize')
const Op = Sequelize.Op

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
   injuries,  downtime, cause, measures} = req.body

   console.log(req.body);
   
    //Input validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('poiform', {
        formCSS: true,
        record: {  date, division, incidentLocation, division_employee, events,  
   injuries,  downtime, cause, measures},
        formValidateJS: true,
        errorMessages: errors.array()
      })
    }
    
    // const newRecord = new Poi({
    //   lat: lat,
    //   lon: lon,
    //   name: name,
    //   UserId: req.user.id
    // })

    // try {
    //   // Save point of interest
    //   await newRecord.save()
    //   res.redirect('/admin/poi')
    // } catch (err) {
    //   console.log(err)
    // }
  },

}

  