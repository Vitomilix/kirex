// Include models
//const { getFormatedMonth, getChartData } = require('../date-process')

// Include models
const db = require('../models')
const Hira = db.Hira
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
 

  getHome: async (req, res) => {
    try {
      
    let title = "Welcome to KirEx"
  
      res.render('index', { indexCSS: true,
      layout: "main",
      title: title})
    } catch (err) {
      return console.log(err)
    }
  },

}

  