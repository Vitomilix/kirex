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
  getMapData: async (req, res) => {
    try {
      // get shop based on coordinates
      let { lat } = req.query
      let { lon } = req.query
  
      res.render('map', { indexCSS: true, lat, lon})
    } catch (err) {
      return console.log(err)
    }
  },

  getAllShops: async (req, res) => {
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
  },
   getAdvancedSearch: async (req, res) => {
    try {
      // populate dropdown
      const records = await Shop.findAll({
        distinct: true,
        attributes: [['category', 'category']],
        
        order: [['id', 'DESC']]
          
      })
    
      

  
      // check if any record is found
      const isEmptyRecord = records.length ? false : true
      
        
  
      res.render('advanced', { indexCSS: true, records,isEmptyRecord })
    } catch (err) {
      return console.log(err)
    }
  },

  getShopResult: async (req, res) => {
    let { shopName } = req.query
    let { category } = req.query

    try {
      
      // get all shops based on name and/or category
      const records = await Shop.findAll({ 
    where: { 
        name: { [Op.like]: '%' + shopName + '%' },
        category: {[Op.like]: '%' + category + '%'}
    } 
})

  
      // check if any record is found
      const isEmptyRecord = records.length ? false : true
      
      

      res.render('result', { indexCSS: true, records,isEmptyRecord })
    } catch (err) {
      return console.log(err)
    }
  }
}

  