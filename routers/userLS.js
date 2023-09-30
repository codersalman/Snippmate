const express=require('express');
const router=express.Router();
const responce=require('../controlers/responce');
const user=require('../modals/user');
const data=require('../modals/content');

router.post("/login/:username",async (req,res)=>{
    const password=req.body.password;
//authentication using



    const username=req.params.username;
    console.log(username,password)
    // try {
    //     let userdetails=await user.findOne({username:username});
    //     if(!userdetails) {
    //         responce.sendError(res,401,'User Not Present');
    //     }
    //     const userdata=await data.find({user:username});
    //     const data={
    //         userdetails,userdata
    //     }
    //     responce.sendResponse(res,200,data);
    // } catch (error) {
    //    responce.internalError(res);
    // }
    const data={
        username,password
    }
    responce.sendResponse(res,200,data);

});

router.post("/signup",async (req,res)=>{
    //authentication ugin 
    
        const {email,username,password}=req.body;
        console.log(req.body)
        try {
            let userdetails=await user.findOne({email:email});
            if(userdetails) {
                responce.sendError(res,401,'User Already exists');
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