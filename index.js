const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/BMS')

const isBlog= require('./middlewares/isBlog')
//setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');
// app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); 
app.use(isBlog.isBlog)

// For Admin Routes
const adminRoute = require('./routes/adminRoutes')
app.use('/', adminRoute) 
// For User Routes
const userRoute = require('./routes/userRoute')
app.use('/', userRoute) 
// For Blog Routes
const blogRoute = require('./routes/blogRoute')
app.use('/', blogRoute) 

// specify public directory form to surve sta tic fies


 
app.listen(port, ()=>{ 

    console.log(`Your server is listning on http://localhost:${port}`)
})   