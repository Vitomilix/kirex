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
   
   let { step } = req.query
      
      res.render('hira', { layout: 'main', formCSS: true, step})
    } catch (err) {
      return console.log(err)
    }
  }
}

  