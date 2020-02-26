const express = require('express')
const router = express.Router()

// Include controllers
const homeController = require('../controllers/incidents')
const { body } = require('express-validator')
// Include authentication middleware
const isAuthenticated = require('../config/auth')

router.get('/', isAuthenticated, homeController.getHome)

router.post('/', isAuthenticated, [
body('date')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Date is required！'),
  body('division')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Division is required！'),
  body('incidentLocation')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Location is required！'),
   body('division_employee')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Employee Division is required Required！'),
   body('events')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Events are required'),
  body('downtime')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Downtime is required'),
   
   body('injuries')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Injuries are required'),
     body('cause')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Cause is required'),
     body('measures')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Measures are required'),
     
], homeController.postNewIncident)

module.exports = router