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
   
   let title = "Submit a new Hira | Kirex"
      
      res.render('hira', { layout: 'main', formCSS: true, title})
    } catch (err) {
      return console.log(err)
    }
  }
}

  