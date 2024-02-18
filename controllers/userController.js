const User = require('../modules/userModel')
const bcrypt = require('bcrypt')
const loadLogin = async (req, res) => {
    try {
        res.render('login')
    } catch (error) {
        console.log(error.message)
    }
}
const verifyLogin = async (req, res) => {
    try {
        const email = req.body.email;
        console.log(email)
        const password = req.body.password;
        const userData = await User.findOne({email:req.body.email})
        console.log(userData)
        if (userData) {
            const passwordMatch = await bcrypt.compare(password, userData.password)
           
             req.session.user_id = userData._id;
             req.session.isAdmin = userData.isAdmin;
          
            if (passwordMatch) { 
                if (userData.isAdmin == 1) {
                    res.redirect('/dashboard')
                } else {
                    res.redirect('/profile')
                }
            } else {
                res.render('login', { message: "Email or Password is incorrect" });
            }


        } else {
            res.render('login', { message: "Email or Password is incorrect pass not cheacked" });
        }
    } catch (error) {
        console.log(error)
    }
}
 
const profile = async (req, res) => {
    try {
        res.send('hii this is your porfile')
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = {
    loadLogin,
    verifyLogin,
    profile
}