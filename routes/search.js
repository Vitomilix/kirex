const express = require('express')
const router = express.Router()

// Include Controllers
const searchController = require('../controllers/search')

// Include check package from express-validator
const { body } = require('express-validator')
// Include authentication middleware
const isAuthenticated = require('../config/auth')


// get searches
router.get('/',isAuthenticated, searchController.getSearch)


router.get('/new', isAuthenticated, searchController.getNewSearch)


router.post('/new', isAuthenticated, [
  body('name')
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('Name must be less than 255 Charactars！'),
  
  body('shopName')
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('The Shop Name is required'),
body('shopCategory')
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('The Shop Category is required'),
  
  body('nearPoi')
    .trim()
        .isLength({ min: 1, max: 255 })
    .withMessage('The POI is required'),
    body('radiusToPoI')
    .trim()
    .isInt({ min: 1, max: 99999 })
    .withMessage('A Radius is required')
], searchController.postNewSearch)


router.get('/edit/:id', isAuthenticated, searchController.getEditSearch)


router.put('/edit/:id', isAuthenticated, [
 
  body('name')
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('Name must be less than 255 Charactars！'),
  
  body('shopName')
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('The Shop Name is required'),
body('shopCategory')
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('The Shop Category is required'),
  
  body('nearPoi')
    .trim()
        .isLength({ min: 1, max: 255 })
    .withMessage('The POI is required'),
    body('radiusToPoI')
    .trim()
    .isInt({ min: 1, max: 99999 })
    .withMessage('A Radius is required')
], searchController.postEditSearch)

/
router.delete('/delete/:id', isAuthenticated, searchController.deleteSearch)


module.exports = router