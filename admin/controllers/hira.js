// Include models
//const { getFormatedMonth, getChartData } = require('../date-process')
const { validationResult } = require('express-validator')
// Include models
const db = require('../models')
const Hira = db.Hira

const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  getHome: async (req, res) => {
    try {

  

      const hiraResult = await Hira.findAll({
          order: [['id', 'DESC']]
      })


      const hiraResultRaw = await Hira.findAll({
        attributes: ['name', 'email', 'companyNumber','taskActivity', 'projectNumber', 'area',
      'doneBefore', 'haveChangesMade', 'electricalEquipment',
      'safeAccess','machineGuarding', 'correctEquipment','preinspectedEquipment',
         'sds', 'controlToxic', 'fumeSystems',
          'ppe', 'hazard', 'otherHazard', 'controlHazard', 'controlHazardOther', 'monitorProcess',
          'contactbetween', 'socialdistancing', 'workspacecleaned', 'placewashhands', 'papertissues', 'accesstosanitizing', 
          'postersPromoting', 'flulikesymptoms', 'irritateairways', 'naturalventilation',
          'additionalComments' ],
          raw: true
      })
    let hiraResultRawString = JSON.stringify(hiraResultRaw); 




      
   
   let title = "View Hira results | Kirex"
      
      res.render('hira', { layout: 'main', formCSS: true, title, hiraResult, hiraResultRawString})
    } catch (err) {
      return console.log(err)
    }
  },

    getLimit: async (req, res) => {
    try {
          let limit = req.query.limit;

          limit = parseInt(limit);
          
      const hiraResult = await Hira.findAll({
          order: [['id', 'DESC']],
          limit: limit
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




      
   
   let title = "View Hira results | Kirex"
      
      res.render('hira', { layout: 'main', formCSS: true, title, hiraResult, hiraResultRawString})
    } catch (err) {
      return console.log(err)
    }
  },

  postNewHira: async (req, res) => {
    //Handle input

    
    const {  name, email, companyNumber,taskActivity, projectNumber, area,
      doneBefore, haveChangesMade, electricalEquipment,
      safeAccess,machineGuarding, correctEquipment,preinspectedEquipment,
         sds, controlToxic, fumeSystems,
          ppe, hazard, otherHazard, controlHazard, controlHazardOther, monitorProcess,
          additionalComments } = req.body
    //Input validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('hira', {
        formCSS: true,
        record: { name, email, companyNumber,taskActivity, projectNumber, area,
      doneBefore, haveChangesMade, electricalEquipment,
      safeAccess,machineGuarding, correctEquipment,preinspectedEquipment,
         sds, controlToxic, fumeSystems,
          ppe, hazard, otherHazard, controlHazard, controlHazardOther, monitorProcess,
          additionalComments},
        formValidateJS: true,
        errorMessages: errors.array()
      })
    }
    
    const newRecord = new Hira({
      name: name,
      email: email,
      companyNumber: companyNumber,
      taskActivity: taskActivity,
      projectNumber: projectNumber,
      area: area,
      doneBefore: doneBefore,
      haveChangesMade: haveChangesMade,
      electricalEquipment: electricalEquipment,
      safeAccess: safeAccess,
      machineGuarding: machineGuarding,
      correctEquipment: correctEquipment,
      preinspectedEquipment: preinspectedEquipment,
      sds: sds,
      controlToxic: controlToxic,
      fumeSystems: fumeSystems,
      ppe: ppe,
      hazard: hazard,
      otherHazard: otherHazard,
      controlHazard: controlHazard,
      controlHazardOther: controlHazardOther,
      monitorProcess: monitorProcess,
      additionalComments: additionalComments,
      UserId: req.user.id
    })

    try {

      
      // Save point of interest
      await newRecord.save()
  
      
      req.flash('success', 'Your Hira was logged')
      res.redirect('/')
    } catch (err) {
      console.log(err)
    }
  },
}

  