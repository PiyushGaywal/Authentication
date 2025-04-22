const express=require('express')
const dsb=express()


dsb.use('/dashboard',(req,res,next)=>{
    res.render('dash')
})


module.exports=dsb