const asyncHandler=require("express-async-handler")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const authmiddleware=asyncHandler(async(req,res,next)=>{
    try{
        const token=req.headers.token
        if(!token){
            return res.send({ok:false,msg:"token missing"})
        }
        const decoded=await jwt.decode(token,process.env.secret)
        res.userdata=decoded
        next()
    }catch(err){
        console.log(err)
        return res.send({ok:false,msg:"invalid token"})
    }
})

module.exports={authmiddleware}