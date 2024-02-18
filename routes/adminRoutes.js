const express = require('express');
const adminController = require('../controllers/adminController')
const bodyParser = require('body-parser')
const adminRoute = express();


// set bodyParser used in taking data from Form(textarea).
adminRoute.use(bodyParser.json());
adminRoute.use(bodyParser.urlencoded({extended: true}));

// Setup view engine 
adminRoute.set('view engine', 'ejs');
adminRoute.set('views', './views');

// Setup path to public directory
const multer = require('multer');
const path = require('path');

// make the public folder static
adminRoute.use(express.static(__dirname+'/public'));

// uploading images through multer (i.e blog title or porfile images)
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: function(req, file, cb){
        const name =  Date.now()+'-'+file.originalname;
        cb(null, name);
    }
});
const upload = multer({storage: storage});

const session = require('express-session')
const config = require('../config/config')
adminRoute.use(session({
    secret:config.sessionSecret,
    resave:true,
    saveUninitialized:true,

}))

// require middleware
const adminLoginAuth = require('../middlewares/adminLoginAuth')
// adminRoute.get('/login', adminController.login )
adminRoute.get('/blog-setup', adminController.blogSetup);
adminRoute.post('/blog-setup', upload.single('blog_image'), adminController.blogSetupSave);

// adminRoute.get('/dashboard', adminController.dashboard);
adminRoute.get('/dashboard',adminLoginAuth.isLogin, adminController.dashboard);

module.exports = adminRoute;



