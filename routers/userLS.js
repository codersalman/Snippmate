const express=require('express');
const router=express.Router();
const responce=require('../controlers/responce');
const user=require('../modals/user');
const data=require('../modals/content');


//login route

router.post("/login/:username",async (req,res)=>{

//authentication using
    const password=req.body.password;
    const username=req.params.username;
    console.log(username,password)

    //authentication process ...
    
   try {
    //authentication process ...
    
    responce.sendResponse(res,200,"Success");
   } catch (error) {
    responce.internalError(res);
   }
    

});

//signup route

router.post("/signup",async (req,res)=>{
    //authentication  
    
        const {email,username,password,confirmPassword}=req.body;
        console.log(req.body)
        try {
            let userdetails=await user.findOne({email:email});
            if(userdetails) {
             
               return responce.sendError(res,401,'User Already exists');
            }
           
            let newuser=await user.create({
                email,username,password
            })
          
            responce.sendResponse(res,200,data);
        } catch (error) {
           responce.internalError(res);
        }
       
    });


    
module.exports=router;

