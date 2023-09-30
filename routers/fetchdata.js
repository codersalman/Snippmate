const express=require('express');
const router=express.Router();
const responce=require('../controlers/responce');
const user=require('../modals/usermodel');
const data=require('../modals/dbmodel');

router.get("/:username",async (req,res)=>{
//authentication ugin 

    const username=req.params.username;
    try {
        let userdetails=await user.findOne({username:username});
        if(!userdetails) {
            responce.sendError(res,401,'User Not Present');
        }
        const userdata=await data.find({user:username});
        const data={
            userdetails,userdata
        }
        responce.sendResponse(res,200,data);
    } catch (error) {
       responce.internalError(res);
    }
    responce.sendResponse(res,200,'Hello');

});

module.exports=router;