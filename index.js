const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/BMS')

const isBlog= require('./middlewares/isBlog')
app.use(isBlog.isBlog)
// For Admin Routes
const adminRoute = require('./Router/adminRoutes')
app.use('/', adminRoute)

app.listen(port, ()=>{

    console.log(`Your server is listning on http://localhost:${port}`)
})