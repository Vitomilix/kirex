const express = require('express')
const router = express.Router()

// Include Controllers
const incidentsController = require('../controllers/incidents')

// Include check package from express-validator
const { body } = require('express-validator')
// Include authentication middleware
const isAuthenticated = require('../config/auth')

// get poi
router.get('/',isAuthenticated, incidentsController.getPoi)

// Edit point of interest
router.get('/edit/:id', isAuthenticated, incidentsController.getEditPoi)

// submit point of interest edit
router.put('/edit/:id', isAuthenticated, [
  // name is requires
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
  
], poiController.postEditPoi)

// Delete point of interest 
router.delete('/delete/:id', isAuthenticated, incidentsController.deletePoi)


module.exports = router