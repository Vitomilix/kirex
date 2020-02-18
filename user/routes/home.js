const express = require('express')
const router = express.Router()

// Include controllers
const homeController = require('../controllers/home')

// Include authentication middleware
const isAuthenticated = require('../config/auth')

router.get('/', homeController.getAllShops)
router.get('/result', homeController.getShopResult)
router.get('/map', homeController.getMapData)
router.get('/advanced', homeController.getAdvancedSearch)



module.exports = router