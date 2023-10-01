const express=require('express');
const router=express.Router();
const responce=require('../controlers/responce');
const content=require('../modals/content');
const user=require('../modals/user')


 //Save an code Snippets
router.post("/",async (req,res)=>{
        const {title,discription,type,username}=req.body;
        console.log(req.body);
        try {
            let userdetail=await user.findOne({username:username});
            let userid=userdetail._id;
            await content.create({
                title,discription,type,userid
            })
        responce.sendResponse(res,200,"Saved");
        } catch (error) {
           responce.internalError(res);
        }
    
    });
    router.get('/',async (req,res)=>{
        try {
            let usercontent=await content.find();
            responce.sendResponse(res,200,usercontent);

        } catch (error) {
            responce.internalError(res);
        }
    })

    //get specific type of Snippets

    router.get('/:userid/:type',async (req,res)=>{
        console.log(req.params)
        const {userid,type}=req.params;
        try {
            let usercontent=await content.find({type:type,userid:userid});
            responce.sendResponse(res,200,usercontent);

        } catch (error) {
            responce.internalError(res);
        }
    })

     //get All type of Snippets
    router.get('/:id',async (req,res)=>{
        const id=req.params.id;
        try {
            const usercontent=await content.find({userid:id});
            return responce.sendResponse(res,200,usercontent);
        } catch (error) {
            responce.internalError(res);
        }

    })

    // delete an Snippet
router.delete("/:id",async (req,res)=>{
    const id=req.params.id;
    try {
        await content.findByIdAndDelete(id);
        return responce.sendResponse(res,200,"Success");
    } catch (error) {
        responce.internalError(res);
    }
})


    
module.exports=router;