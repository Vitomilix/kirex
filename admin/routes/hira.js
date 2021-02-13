const express = require('express')
const router = express.Router()

// Include controllers
const homeController = require('../controllers/hira')

// Include authentication middleware
const isAuthenticated = require('../config/auth')
const { body } = require('express-validator')
router.get('/', isAuthenticated, homeController.getHome)

router.get('/limit', isAuthenticated, homeController.getLimit)

// Create submit new point of interest
router.post('/', isAuthenticated, [
body('name')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Name is required！'),
   body('companyNumber')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Employee Number required！'),
   body('taskActivity')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Task/Activity Required！'),
  body('projectNumber')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Project Number Required！'),
  body('area')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Area Required！'),
  body('doneBefore')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Select one of the options！'),
  body('haveChangesMade')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Select one of the options！！'),
  body('electricalEquipment')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Select one of the options！！'),
  body('safeAccess')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Task/Activity Required！'),
  body('machineGuarding')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Select one of the options！'),
  body('correctEquipment')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Select one of the options!'),
  body('preinspectedEquipment')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Select one of the options！'),
  body('sds')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Select one of the options！'),
  body('controlToxic')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Select one of the options！'),
  body('fumeSystems')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Select one of the options！'),
  body('ppe')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Task/Activity Required！'),
  body('hazard')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Task/Activity Required！'),
  body('hazard')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Task/Activity Required！'),
  body('otherHazard')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Task/Activity Required！'),
  body('controlHazard')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Task/Activity Required！'),
  body('controlHazardOther')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Task/Activity Required！'),
  body('monitorProcess')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Task/Activity Required！'),


body('contactbetween')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the process to be monitored'),
  body('socialdistancing')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the process to be monitored'),
  body('workspacecleaned')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the process to be monitored'),
  body('placewashhands')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the process to be monitored'),
  body('papertissues')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the process to be monitored'),
  body('accesstosanitizing')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the process to be monitored'),
  body('postersPromoting')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the process to be monitored'),
  body('flulikesymptoms')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the process to be monitored'),
  body('irritateairways')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the process to be monitored'),
  body('naturalventilation')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the process to be monitored'),





   body('additionalComments')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Task/Activity Required！'),
   
], homeController.postNewHira)

module.exports = router