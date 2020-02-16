const express = require('express')
const router = express.Router()

// Include Controllers
const shopController = require('../controllers/shop')

// Include check package from express-validator
const { body } = require('express-validator')
// Include authentication middleware
const isAuthenticated = require('../config/auth')


// Create new Hira
router.get('/', isAuthenticated, shopController.getNewShop)

// Submit new Hira
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
   body('website')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Website required！'),
   body('tradingHours')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Trading Hours required！'),
  body('category')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Category required！'),
  body('street')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('street required！'),
  body('postalCode')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('PostalCode required！')
], shopController.postNewShop)



module.exports = router