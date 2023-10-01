const express=require('express');
var cookieParser = require('cookie-parser');
const app=express();
const port=3000;
const connecttodb=require('./controlers/dbconnection');
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
connecttodb();

// app.use('/generativeai',require('./routers/generativeai'));
// app.use('/auth',require('./routers/auth'));
const corsOptions = {
    origin: ["*"],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use('/', cors(corsOptions), require('./routers/userLS'));
app.use('/content',cors(corsOptions),require('./routers/content'));

app.get('/',(req,res)=>{
    res.send("hello");
});




app.listen(port,()=>{
    console.log("Application Running ")
});
