const express = require('express')
const router = express.Router()

// Include controllers
const homeController = require('../controllers/home')

// Include authentication middleware
const isAuthenticated = require('../config/auth')

router.get('/',isAuthenticated, homeController.getAllShops)




module.exports = router