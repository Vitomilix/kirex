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


const hiraResultRaw = await Hira.findAll({
        attributes: ['name', 'email', 'companyNumber','taskActivity', 'projectNumber', 'area',
      'doneBefore', 'haveChangesMade', 'electricalEquipment',
      'safeAccess','machineGuarding', 'correctEquipment','preinspectedEquipment',
         'sds', 'controlToxic', 'fumeSystems',
          'ppe', 'hazard', 'otherHazard', 'controlHazard', 'controlHazardOther', 'monitorProcess',
          'additionalComments' ],
          raw: true
      })
    let hiraResultRawString = JSON.stringify(hiraResultRaw); 

  
      
    let title = "Welcome to KirEx Admin"
  
      res.render('index', { indexCSS: true, countHira,countIncident, 
      hiraLastMonth,incidentsLastMonth,hiraResultRawString,
      layout: "main",
      bodyclass: 'position-relative',
      title: title})
    } catch (err) {
      return console.log(err)
    }
  }
}

  