const mongoose=require('mongoose');
const url="";

const connecttodb=()=>{
    mongoose.connect(url).then(()=>{
        console.log("connection successfull");
    }).catch(error=>console.log(error));
}


module.exports=connecttodb;
