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
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    }
});
const data=mongoose.model('dataSchema',dataSchema);
module.exports=data;