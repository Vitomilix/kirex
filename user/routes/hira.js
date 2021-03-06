const express = require('express')
const router = express.Router()

// Include controllers
const homeController = require('../controllers/hira')

// Include authentication middleware
const isAuthenticated = require('../config/auth')
const { body } = require('express-validator')
router.get('/', isAuthenticated, homeController.getHome)

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
  .withMessage('Have you done this task before'),
  body('haveChangesMade')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Have changes been made to the process'),
  body('electricalEquipment')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Did you use electrical equipment'),
  body('safeAccess')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Was the area safe to access Required！'),
  body('machineGuarding')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Was machine guarding adequate！'),
  body('correctEquipment')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Did you have the correct equipment'),
  body('preinspectedEquipment')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Was there equipment preinspected'),
  body('sds')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Have the SDS been read or reviewed'),
  body('controlToxic')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('  Were the controls for toxic gasses/fumes in place'),
  body('fumeSystems')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Are Fume cupbords/extraction systems Working'),
  body('ppe')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Was the correct PPE valiable and used'),
  body('hazard')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('What hazards did you encounter'),
  body('hazard')
  .trim()
  .isLength({ min: 0, max: 255 })
  .withMessage('What hazards did you encounter'),
  body('otherHazard')
  .trim()
  .isLength({ min: 0, max: 255 })
  .withMessage('Were there other hazards'),
  body('controlHazard')
  .trim()
  .isLength({ min: 0, max: 255 })
  .withMessage('How could the hazard be controlled'),
  body('controlHazardOther')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Were there other means to control '),
  body('monitorProcess')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the process to be monitored'),





  body('contactbetween')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Is the work area arranged to ensure minimal contact between workers'),
  body('socialdistancing')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Have other measures been implemented to achieve social distancing? (E.g. Screens)'),
  body('workspacecleaned')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Was the workspace cleaned/disinfected before the commencement of work'),
  body('placewashhands')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Do workers have access to a place where they can wash their hands with soap and water'),
  body('papertissues')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Are paper tissues available'),
  body('accesstosanitizing')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Do workers have access to sanitizing hand rub dispensers'),
  body('postersPromoting')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Are posters promoting regular hand-washing displayed'),
  body('flulikesymptoms')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Does any of the workers involved present with flu-like symptoms'),
  body('irritateairways')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Does the work include the use of material that is likely to irritate airways?'),
  body('naturalventilation')
  .trim()
  .isLength({ min: 1, max: 255 })
  .withMessage('Does the area have sufficient natural ventilation'),




  
   body('additionalComments')
  .trim()
  .isLength({ min: 0, max: 255 })
  .withMessage('Task/Activity Required！'),
   
], homeController.postNewHira)

module.exports = router