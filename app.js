const express=require('express');
const app=express();
const port=3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api',require('./routers/api'));

app.listen(port,()=>{
    console.log("Application Running ")
});