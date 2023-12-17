const express = require('express');


const adminRoute = require('../Router/adminRoutes');

const blogOne = async (req, res)=>{
    res.send('Blog One')
}
const blogTwo = async (req, res)=>{
    res.send('Blog Two')
}
const blogSetup = async (req, res)=>{
    res.send('Please setup you blog')
}

module.exports = {
    blogOne,
    blogTwo,
    blogSetup
}