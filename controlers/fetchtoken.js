const jwt=require('jsonwebtoken');
const responce=require('./responce');

const fetchuser= async (req,res,next)=>{
try {
    const token=req.header('auth-token');
    if (!token) {

     responce.sendError(res,401,"please authenticate using the token");
    }
    const data=jwt.verify(token,jWT_screat);
    req.user=data.user;
    next();
} catch (error) {
   
    responce.sendResponse(res,401,"please authenticate using the token");
}

}

module.exports=fetchuser;