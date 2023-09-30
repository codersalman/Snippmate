const express=require('express');
var cookieParser = require('cookie-parser');
const app=express();
const port=3000;
const connecttodb=require('./controlers/dbconnection');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
connecttodb();

app.use('/generativeai',require('./routers/generativeai'));
app.use('/auth',require('./routers/auth'));
app.use('/',require('./routers/fetchdata'));

app.get('/',(req,res)=>{
    res.send("hello");
})
app.listen(port,()=>{
    console.log("Application Running ")
});