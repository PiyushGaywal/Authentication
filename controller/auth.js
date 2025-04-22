const info = require('../models/info');

exports.showlogin=(req,res,next)=>{
    res.render('login')
}

exports.login=async(req,res,next)=>{
    const{Username,Password}=req.body
    try{
        user=await info.findOne({Username,Password})
        if(user){
            req.session.user=user
            res.render('dash')
        }else{
            res.send('Wrong Details Entered')
        }
    }catch(err){
        console.log(err);
        
    }
}

exports.showSignup=(req,res,next)=>{
    res.render('signup')
}

exports.signup=async(req,res,next)=>{
    const{Username,Email}=req.body
    try{
        Euser = await info.findOne({
            $or: [{ Username }, { Email }]
          });
          
        if(Euser){
            res.send('User Allready Exits')
        }else{
            const Nuser= new info(req.body)
            await Nuser.save()
            res.render('login')
            console.log('User Saved Success');
        }
    }catch(err){

    }
}


exports.logout=(req,res,next)=>{
    req.session.destroy(err=>{
        if(err){
            log(err)
        }else{
            res.redirect('/login')
        }
    })
}

