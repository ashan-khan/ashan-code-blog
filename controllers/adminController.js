const express = require('express');
const blogSetting = require('../modules/blogSettingModel');// will in login route
const User = require('../modules/userModel')
const adminRoute = require('../routes/adminRoutes');
const bcrypt = require('bcrypt')// it is used in password encryption

const securePassword = async (password)=>{
    try {
       const passwordHash = await bcrypt.hash(password, 10);
       return passwordHash;
    } catch (error) {
        console.log(error.message)
    }
}
const login = async (req, res)=>{
    res.send('Login or SignUp')
}
const blogSetup = async (req, res)=>{
   try {
    
    let blogsetting = await blogSetting.find()
    if(blogsetting.length > 0){
        res.redirect('/login')
    }else{
        res.render('blogSetup')
    }
 
   } catch (error) {
    console.log(error.message) 
   }
}
const blogSetupSave = async (req, res)=>{
    try {
     const blog_title =  req.body.blog_title;
     const blog_image =  req.file.filename;
     const blog_description =  req.body.description;
     const name =  req.body.name;
     const email =  req.body.email;
     const password = securePassword(req.body.password)

     const blogSetting = new blogSetting({
        blog_title: blog_title,
        blog_logo: blog_image,
        blog_description: blog_description

     })
     await blogSetting.save();

     const User =new User({
        name:name,
        email:email,
        password:password,
        isAdmin: 1
     })
     const userData =await User.save();
     if(userData){
        res.redirect('/login')
     }else{
        res.render('blogsetup',{message: 'blog not setup properly'})
     }

    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {
    login,
    blogSetup,
    blogSetupSave
}