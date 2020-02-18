const express = require('express')
const router = express.Router()

// Include Controllers
const incidentsController = require('../controllers/incidents')

// Include check package from express-validator
const { body } = require('express-validator')
// Include authentication middleware
const isAuthenticated = require('../config/auth')

// Create new incident
router.get('/', isAuthenticated, incidentsController.getNewPoi)

// Create submit new point of interest
router.post('/', isAuthenticated, [
body('lat')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Latitude must be of the format 15.55454！'),
   body('lon')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Longetude must be of the format 47.55454！'),
   body('name')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Name Required！'),
   
], incidentsController.postNewPoi)




module.exports = router