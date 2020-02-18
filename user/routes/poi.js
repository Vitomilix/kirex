const express = require('express')
const router = express.Router()

// Include Controllers
const poiController = require('../controllers/poi')

// Include check package from express-validator
const { body } = require('express-validator')
// Include authentication middleware
const isAuthenticated = require('../config/auth')

// get poi
router.get('/',isAuthenticated, poiController.getPoi)
// Create new point of interest
router.get('/new', isAuthenticated, poiController.getNewPoi)

// Create submit new point of interest
router.post('/new', isAuthenticated, [
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
   
], poiController.postNewPoi)

// Edit point of interest
router.get('/edit/:id', isAuthenticated, poiController.getEditPoi)

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
router.delete('/delete/:id', isAuthenticated, poiController.deletePoi)


module.exports = router