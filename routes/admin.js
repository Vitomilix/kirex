const express = require('express')
const router = express.Router()

// Include controllers
const adminController = require('../controllers/admin')

// Include authentication middleware
const isAuthenticated = require('../config/auth')

router.get('/', isAuthenticated,adminController.getHome)
router.get('/result', isAuthenticated, adminController.getShopResult)

module.exports = router