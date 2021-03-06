// Include modules
const express = require('express')
const app = express()
require('dotenv').config();
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const handlebarHelpers = require('./handlebars-helpers')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const csrf = require('csurf')
const mysql = require('mysql')
const fileUpload = require('express-fileupload');
const dbquery = mysql.createConnection ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

// connect to database
dbquery.connect((err) => {
    if (err) {
        throw err;
    }
    //console.log('Connected to database');
});
global.dbquery = dbquery;
// check if it's in production mode
if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

// Include models
const db = require('./models')
const User = db.User


// Initialize csrf protection middleware
const csrfProtection = csrf()

// Include controllers
const errorController = require('./controllers/error')

// Set up express-handlebars
app.engine('handlebars', exphbs({ default: 'main' }))
app.set('view engine', 'handlebars')
// Include routers
const homeRoutes = require('./routes/home')



const userRoutes = require('./routes/user')
const hiraRoutes = require('./routes/hira')
const incidentsRoutes = require('./routes/incidents')



// Set up server related variable
const port = 3000

// add middle-parser middleware
app.use(bodyParser.urlencoded({ extended: true }))



// set up session
app.use(session({
  secret: 'joifhjoweifoikwenfokerjnofmweakmndlew',
  resave: false,
  saveUninitialized: false
}))

// use csrf protection middleware after session
app.use(csrfProtection)

// use flash middleware
app.use(flash())

app.use(fileUpload());


// Initialize Passport
app.use(passport.initialize())

// use persistent login sessions
app.use(passport.session())

// include passport config
require('./config/passport')(passport)

// Set response local level variables to use in views during that cycle
app.use((req, res, next) => {
  // safe user info
  res.locals.user = req.user
  // reminder message
  res.locals.reminder = req.flash('reminder')
  // error message
  res.locals.error = req.flash('error')
  // success message
  res.locals.success = req.flash('success')
  // generate one CSRF token to each render page
  res.locals.csrfToken = req.csrfToken()
  next()
})

// use method-override to override using a query value
app.use(methodOverride('_method'))

// serve static files
app.use(express.static('public'))

// home route
app.use('/', homeRoutes)

app.use('/hira', hiraRoutes)
app.use('/incidents', incidentsRoutes)







// user routes
app.use('/users', userRoutes)



// error page
app.use(errorController.getError)

// Start and listen to server
app.listen(process.env.PORT || port, () => {
  //console.log(`Express is listening on http://localhost:${port}`)
})
