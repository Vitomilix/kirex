// Include models
//const { getFormatedMonth, getChartData } = require('../date-process')

// Include models
const db = require('../models')
const Shop = db.Shop
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  getHome: async (req, res) => {
    try {
      // retrieve all shops
      const records = await Shop.findAll({
        order: [['id', 'DESC']]
          
      })
    
      

  
      // check if any record is found
      const isEmptyRecord = records.length ? false : true
      
      
  
      res.render('index', { indexCSS: true, records,isEmptyRecord })
    } catch (err) {
      return console.log(err)
    }
  },
  getShopResult: async (req, res) => {
    let { shopName } = req.query
    let { category } = req.query
    
    try {
      
      // retrieve all shops based on name and/or category
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