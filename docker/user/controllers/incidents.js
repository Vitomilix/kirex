// Include models
//const { getFormatedMonth, getChartData } = require('../date-process')

// Include models
const db = require('../models')
const Incidents = db.Incidents
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { validationResult } = require('express-validator')
const fileUpload = require('express-fileupload');
module.exports = {
  getHome: async (req, res) => {
    try {
   
   let title = "Submit a new Incident | Kirex"
      
      res.render('incidents', { layout: 'main', formCSS: true, title})
    } catch (err) {
      return console.log(err)
    }
  },
  postNewIncident: async (req, res) => {
    //Handle input
    const {   date, division, incidentLocation, division_employee, events,  
   injuries,  downtime, cause, measures} = req.body


    // get timestamp

    let today = new Date();
    let time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();
    let timestamp = time + "-" + year + "-" + month + "-" + day

console.log(req.files);

   let uploadedFile = req.files.imageOne;
   let imageOne = uploadedFile.name;
   let fileExtension = uploadedFile.mimetype.split('/')[1];
    imageOne = timestamp + '.' + fileExtension;

     uploadedFile.mv(`public/uploadedImages/${imageOne}`, (err ) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
     });

   
    //Input validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).render('incidents', {
        formCSS: true,
        record: {  date, division, incidentLocation, division_employee, events,  
   injuries,  downtime, cause, measures, imageOne},
        formValidateJS: true,
        errorMessages: errors.array()
      })
    }
    




    const newRecord = new Incidents({
      date: date,
      division: division,
      incidentLocation: incidentLocation,
      division_employee: division_employee,
      events: events,
      injuries: injuries,
      downtime: downtime,
      cause: cause,
      measures: measures,
      imageOne: imageOne,
      UserId: req.user.id
    })

    try {
      // Save point of interest
      await newRecord.save()
      req.flash('success', 'Your Incident has been logged')
      res.redirect('/')
    } catch (err) {
      console.log(err)
    }
  },

}

  