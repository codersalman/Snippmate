const express=require('express');
const router=express.Router();
const responce=require('../controlers/responce');
const content=require('../modals/content');


router.post("/",async (req,res)=>{
    //authentication ugin 
    
        const {title,discription,type,username}=req.body;
        console.log(req.body);
        try {
            
            await content.create({
                title,discription,type,username
            })
        responce.sendResponse(res,200,"Saved");
        } catch (error) {
           responce.internalError(res);
        }
    
    });


    
module.exports=router;