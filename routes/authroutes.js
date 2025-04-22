const express = require('express');
const router = express.Router();

const authcontroller = require('../controller/auth');
const authmiddleware=require('../middleware/authmid')

router.post('/login', authcontroller.login);
router.get('/login', authcontroller.showlogin);
router.get('/signup', authcontroller.showSignup);
router.post('/signup', authcontroller.signup);
router.get('/logout',authcontroller.logout)



router.get('/dashboard',authmiddleware,(req,res)=>{
    res.render('dash',{user:req.session.user})
})

module.exports = router;
