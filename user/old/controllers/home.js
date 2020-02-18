// Include models
//const { getFormatedMonth, getChartData } = require('../date-process')

// Include models
const db = require('../models')
const Incidents = db.Incidents
const Hira = db.Hira
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {

  getHome: async (req, res) => {
    try {
        
  
      res.render('index')
    } catch (err) {
      return console.log(err)
    }
  }
  

}