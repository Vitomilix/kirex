// Include models
//const { getFormatedMonth, getChartData } = require('../date-process')

// Include models
const db = require('../models')
const Hira = db.Hira
const Incidents = db.Incidents
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const moment = require('moment');

module.exports = {
 

  getHome: async (req, res) => {
    try {

     const countHira = await Hira.findAndCountAll({
          
      })

       const countIncident = await Incidents.findAndCountAll({
          
      })
      

        
      const hiraLastMonth = await Hira.findAndCountAll({
  where: {
    createdAt: {
      [Op.gte]: moment().subtract(30, 'days').toDate()
    }
  }
})

 const incidentsLastMonth = await Incidents.findAndCountAll({
  where: {
    createdAt: {
      [Op.gte]: moment().subtract(30, 'days').toDate()
    }
  }
})
  
      
    let title = "Welcome to KirEx Admin"
  
      res.render('index', { indexCSS: true, countHira,countIncident, 
      hiraLastMonth,incidentsLastMonth,
      layout: "main",
      bodyclass: 'position-relative',
      title: title})
    } catch (err) {
      return console.log(err)
    }
  }
}

  