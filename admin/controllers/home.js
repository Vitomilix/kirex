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
      let hiraMonths = [];
      incidentMonth = [];

     const countHira = await Hira.findAndCountAll({
          
      })

       const countIncident = await Incidents.findAndCountAll({
          
      })
    let monthHira = 1;  
while (monthHira < 13) {

    const currMonth = await Hira.findAndCountAll({
      attributes: ['id'],
  where: {
    createdAt: {
      [Op.gte]: moment().subtract((30 * monthHira)-335, 'days').toDate()
    }
  }
})

hiraMonths.push(currMonth);

monthHira++;

  
}

let hiraMonthsCount = hiraMonths.map(c=>c.count);

hiraMonthsCount = hiraMonthsCount.reverse();
hiraMonthsCount= JSON.stringify(hiraMonthsCount);


 let monthIncident = 1;  
while (monthIncident < 13) {

    const currMonth = await Incidents.findAndCountAll({
      attributes: ['id'],
  where: {
    createdAt: {
      [Op.gte]: moment().subtract((30 * monthIncident)-335, 'days').toDate()
    }
  }
})

incidentMonth.push(currMonth);

monthIncident++;

  
}

let incidentMonthsCount = incidentMonth.map(c=>c.count);

incidentMonthsCount = incidentMonthsCount.reverse();
incidentMonthsCount= JSON.stringify(incidentMonthsCount);

        
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
      hiraLastMonth,incidentsLastMonth,hiraResultRawString, hiraMonthsCount,incidentMonthsCount,
      layout: "main",
      bodyclass: 'position-relative',
      title: title})
    } catch (err) {
      return console.log(err)
    }
  }
}

  