const  mongoose=require('mongoose');
const uri= process.env.MONGO_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connecttodb=async ()=>{
    mongoose.connect(uri).then(()=>{
        console.log("connection successfull");
    }).catch(error=>console.log(error));

//   try {
//     await client.connect();
//     console.log("connected Succesful")
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }

}


module.exports=connecttodb;
