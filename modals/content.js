const mongoose=require('mongoose');
const dataSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true
    },
    code:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    }
});
const content=mongoose.model('contentschema',dataSchema);
module.exports=content;