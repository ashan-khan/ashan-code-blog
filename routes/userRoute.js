const express = require('express');
const userRoute = express();
const userController = require('../controllers/userController')
const session = require('express-session')
const bodyParser = require('body-parser')

// set bodyParser used in taking data from Form(textarea).
userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({extended: true}));
// session setting
const config = require('../config/config')
userRoute.use(session({
    secret:config.sessionSecret,
    resave:true,
    saveUninitialized:true

}))

// Setup view engine 
userRoute.set('view engine', 'ejs');
userRoute.set('views', './views');

// make the public folder static
userRoute.use(express.static(__dirname+'/public'));

// require middleware
const adminLoginAuth = require('../middlewares/adminLoginAuth')
// userRoute.get('/login', userController.loadLogin )
userRoute.get('/login',adminLoginAuth.isLogout, userController.loadLogin )
userRoute.post('/login', userController.verifyLogin )
// userRoute.post('/login', userController.verifyLogin )

// code for logout
userRoute.get('/logout',adminLoginAuth.isLogin, userController.logout )


userRoute.get('/profile', userController.profile) 
module.exports = userRoute; 